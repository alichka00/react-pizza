export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: string;
  sizes: number;
  count: number;
};

export interface I_CartState {
  totalPrice: number;
  items: CartItem[];
}
