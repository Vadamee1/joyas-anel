import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import { ValidCategory } from "@/types/product";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: ValidCategory;
  };
}

export default function Category({ params }: Props) {
  const { id } = params;

  const products = initialData.products.filter(({ tags }) => tags.includes(id));

  /* if (id !== "accessories") notFound(); */

  const label: Record<ValidCategory, string> = {
    accessories: "Accessory",
    craft: "Craft",
    spiritual: "Spiritual",
  };

  return (
    <>
      <Title title={`${label[id]} products`} />
      <ProductGrid products={products} />
    </>
  );
}
