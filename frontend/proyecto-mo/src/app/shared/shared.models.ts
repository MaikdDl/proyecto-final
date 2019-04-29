export interface Cards {
  packs: Card[];
  produtos: Card[];
}

export interface Card {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}
