import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { addToCart } from "../features/cart/cartSlice";
import type { CartItem } from "../../types/cart.types";

const useStore = () => {
  const cart = useSelector((state: RootState) => state?.cart.items);
  const dispatch = useDispatch();

  return {
    cart,
    setCart: (newItem: CartItem) => dispatch(addToCart(newItem)),
  };
};

export default useStore;
