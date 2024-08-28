export type Product = {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  tags: ValidCategory;
  title: string;
  sizes: ValidSizes[];
  type: ValidType;
};

export type ValidSizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type ValidTypes = "shirts" | "pants" | "hoodies" | "hats";
export type ValidCategory = "accessories" | "craft" | "spiritual";

/* export type ValidType =
  | "ring"
  | "set"
  | "chain"
  | "bracelet"
  | "necklace"
  | "stone"
  | "craft"
  | "spiritual"; 
  | "amulet" 
  | "anklet*/
