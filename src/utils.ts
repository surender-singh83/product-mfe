export const fetchProducts = async ({
  pageParam = 0,
}: {
  pageParam?: unknown;
}) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=10&skip=${pageParam}&select=title,price,thumbnail,rating`,
  );

  return res.json();
};