import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProducts } from "../utils";



export default function Products() {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["products"],

    queryFn: fetchProducts,

    initialPageParam: 0,

    getNextPageParam: (lastPage:any, allPages:any) => {
      const nextSkip = allPages.length * 10;

      return nextSkip < lastPage.total ? nextSkip : undefined;
    },

  });
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {data?.pages.map((page:any) =>
          page.products.map((product: any, index: number) => (
            <div
              key={product.id}
              className="content-visibility-[auto] contain-intrinsic-size-[300px] max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="w-48 m-auto h-48">
              <img
                src={product.thumbnail}
                loading={index < 4 ? "eager" : "lazy"}
                fetchPriority={index < 4 ? "high" : "auto"}
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
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-xl transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          )),
        )}
      </div>

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className="mt-5 px-5 py-2 bg-indigo-600 text-white rounded-lg"
        >
          Load More
        </button>
      )}
    </div>
  );
}
