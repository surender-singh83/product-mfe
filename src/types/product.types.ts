export interface Products {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
}

export interface ProductData {
  products: {
    product: Products[];
    total: number;
  };
}
