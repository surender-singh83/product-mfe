export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

export type CartProducts = CartItem & {
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string;
  total: number;
};

export type CartState = {
  items: CartItem[];
  loading: boolean;
  error: null | string;
};

export interface CartApiResponse {
  products: CartProducts[];
}

export type productItem = {
  id: number;
  quantity: number;
};

export type AddToCartTypes = {
  userId: number;
  products: productItem[];
};