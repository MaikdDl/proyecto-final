export interface Cards {
  packs: Card[];
  products: Card[];
}

export interface Card {
  name: string;
  productId: number;
  productDescription: string;
  price: number;
  image: string;
}
