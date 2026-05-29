import React, { useEffect, useRef, useState } from "react";
import useProduct from "../redux/hooks/useProduct";
import DataWorker from "../worker/data.worker?worker";
import EVENTS, { emit } from "../../../packages/event-bus";

export default function Products({ searchKey }: { searchKey?: string | null }) {
  const fetchingRef = useRef(false);
  const [count, setCount] = useState(0);
  const [selectValue, setSelectValue] = useState<string[]>(["Select"]);
  const [option, setOption] = useState<string>("");
  const { total, product, getProduct } = useProduct();
  const workerRef = useRef<Worker | null>(null);
  const hasMore = product.length < total;

  // Throttle function
  function throttle<T extends unknown[]>(
    callback: (...args: T) => void,
    delay: number,
  ) {
    let lastCall = 0;

    return (...args: T) => {
      const now = Date.now();

      if (now - lastCall >= delay) {
        lastCall = now;
        callback(...args);
      }
    };
  }

  const handleAddtoCart = async (product: any) => {
    emit(EVENTS.CART_ADD, product);
  };

  function addData() {
    if (selectValue.length === 1) {
      workerRef.current?.postMessage({
        count: 1000,
      });
    }
  }

  function appendChunkedData(data: any) {
    let index = 0;
    const chunkSize = 500;

    function append() {
      const chunk = data.slice(index, index + chunkSize);

      setSelectValue((prev) => [...prev, ...chunk]);

      index += chunkSize;

      if (index < data.length) {
        requestIdleCallback(append);
      }
    }

    append();
  }

  useEffect(() => {
    const fetchData = async () => {
      if (fetchingRef.current || !hasMore) return;

      fetchingRef.current = true;

      await getProduct(searchKey || "", count);

      fetchingRef.current = false;
    };
    fetchData();
  }, [count, searchKey, hasMore]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;

      const windowHeight = window.innerHeight;

      const fullHeight = document.documentElement.scrollHeight;

      console.log("SCROLL", scrollTop + windowHeight, fullHeight);

      // near bottom
      if (
        hasMore &&
        !fetchingRef.current &&
        scrollTop + windowHeight >= fullHeight - 100
      ) {
        setCount((prev) => prev + 10);
      }
    }, 500);

    window.addEventListener("scroll", handleScroll);

    workerRef.current = new DataWorker();

    workerRef.current.onmessage = (e: MessageEvent<any>) => {
      console.log("DUMMy", e.data);

      appendChunkedData(e.data);
      // setSelectValue((prev)=> [...prev, ...e.data])
    };

    return () => {
      window.removeEventListener("scroll", handleScroll);
      workerRef.current?.terminate();
    };
  }, []);

  if (!product.length) {
    return <>No data</>;
  }

  return (
    <div>
      {/* <h1>{heading}</h1> */}

      <select
        onClick={addData}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setOption(e.target.value)
        }
        name={"dropdown"}
        value={option}
      >
        {selectValue.map((item) => (
          <option>{item}</option>
        ))}
      </select>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 px-6 mt-5">
        {product.map((product: any, index: number) => (
          <div
            key={product.id + "1"}
            className="content-visibility-[auto] will-change-transform contain-intrinsic-size-[300px] max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="w-48 m-auto h-48">
              <img
                src={product.thumbnail}
                loading={index < 1 ? "eager" : "lazy"}
                fetchPriority={index < 1 ? "high" : "auto"}
                width={200}
                height={200}
                alt={product.title}
                className="w-full h-full object-cover"
                decoding="async"
              />
            </div>
            {/* <!-- Card Content --> */}
            <div className="p-5">
              {/* <!-- Product Title --> */}
              <h2
                title={product.title}
                className="text-base truncate font-semibold text-gray-800 mb-2"
              >
                {product.title}
              </h2>

              {/* <!-- Price --> */}
              <p className="text-2xl font-bold text-indigo-600 mb-3">
                {product.price}
              </p>

              {/* <!-- Rating --> */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">★ ★ ★ ★ ☆</div>
                <span className="text-gray-500 text-sm ml-2">
                  {product.rating}
                </span>
              </div>

              {/* <!-- Add to Cart Button --> */}
              <button
                onClick={() => handleAddtoCart(product)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={() => {
            setCount((prev) => prev + 10);
          }}
          className="my-5 px-5 py-2 bg-indigo-600 text-white rounded-lg"
        >
          Load More
        </button>
      </div>
    </div>
  );
}
