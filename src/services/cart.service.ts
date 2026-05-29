export const addToCartProducts = async <T, R>(payload: T): Promise<R> => {
  const res = await fetch("https://dummyjson.com/carts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
};