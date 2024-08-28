import ProductCarousel from "@/components/product/product-carousel/ProductCarousel";
import QuantitySelector from "@/components/product/quantity-selector/QuantitySelector";
import { Button } from "@/components/ui/button";
import { titleFont } from "@/config/font";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function Product({ params }: Props) {
  const { id } = params;
  const product = initialData.products.find((product) => product.id === id);

  if (!product) notFound();

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
        <ProductCarousel images={product.images} title={product.title} />
      </div>
      <div className="col-span-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">$ {product.price}</p>

        <QuantitySelector quantity={2} />

        <Button
          variant="default"
          className="my-5 bg-yellow-300 text-black hover:bg-yellow-200 "
        >
          Add to cart
        </Button>
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
