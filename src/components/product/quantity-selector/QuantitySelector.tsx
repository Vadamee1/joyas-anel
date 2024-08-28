"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}

export default function QuantitySelector({ quantity }: Props) {
  const [count, setCount] = useState(quantity);

  const onQuantityChanged = (value: number) => {
    if (count + value < 1) return;
    setCount(count + value);
  };

  return (
    <div className="flex">
      <Button
        className="rounded-full relative w-10 bg-yellow-300 hover:bg-yellow-200"
        onClick={() => onQuantityChanged(-1)}
      >
        <IoRemoveCircleOutline size={30} className="absolute text-black" />
      </Button>
      <span className="w-20 flex items-center justify-center text-center">
        {count}
      </span>
      <Button
        className="rounded-full relative w-10 bg-yellow-300 hover:bg-yellow-200"
        onClick={() => onQuantityChanged(1)}
      >
        <IoAddCircleOutline size={30} className="absolute text-black" />
      </Button>
    </div>
  );
}
