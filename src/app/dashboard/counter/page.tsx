import { CartCounter } from "@/app/shopping-cart";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Counter page",
  description: "counter page description",
};

const CounterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={20} />
    </div>
  );
};
export default CounterPage;
