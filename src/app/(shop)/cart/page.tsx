import QuantitySelector from "@/components/product/quantity-selector/QuantitySelector";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Title from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function Cart() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Cart" />

        <div className="grid sm:flex justify-between gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Add more items</span>
            <Link href="/" className="underline mb-5">
              Continue shopping
            </Link>

            {productsInCart.map((product) => (
              <div key={product.id} className="flex mb-5">
                <Image
                  alt={product.title}
                  src={`/products/${product.images[0]}`}
                  height={150}
                  width={150}
                  className="mr-5 rounded"
                />
                <div>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                  <QuantitySelector quantity={3} />
                  <Button className="bg-yellow-300 hover:bg-yellow-400 text-black mt-2">
                    Remover
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <Card className="shadow-lg">
              <CardHeader className="text-2xl">Order resume</CardHeader>
              <CardContent className="grid grid-cols-2">
                <p># Products</p>
                <p className="text-end">3</p>
                <p>Subtotal</p>
                <p className="text-end">$ 100</p>
                <p>Impuestos (16½)</p>
                <p className="text-end">$ 100</p>
                <p className="mt-5 text-xl font-bold">Total</p>
                <p className="mt-5 text-xl text-end font-bold">$ 100</p>
              </CardContent>
              <CardFooter>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                  Checkout
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
