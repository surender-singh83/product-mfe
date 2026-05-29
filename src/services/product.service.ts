export const fetchProducts = async ({
  searchKey = "",
  pageParam = 0,
}: {
  searchKey?: string | null;
  pageParam?: unknown;
}) => {
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${searchKey}&limit=10&skip=${pageParam}&select=title,price,thumbnail,rating`,
    {
      cache: "no-store",
    },
  );

  return res.json();
};