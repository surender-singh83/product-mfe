export const fetchProducts = async ({
  searchKey = "",
  pageParam = 0,
}: {
  searchKey?: string | null;
  pageParam?: unknown;
}) => {
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${searchKey}&limit=10&skip=${pageParam}&select=title,price,thumbnail,rating`,
  );

  return res.json();
};

export const debounce = <T extends unknown[]>(
  fn: (...args: T) => void,
  delay: number = 300,
) => {
  let timer: ReturnType<typeof setTimeout>;

  return function (...args: T) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
