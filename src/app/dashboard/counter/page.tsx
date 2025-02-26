import { CartCounter } from "@/shopping-cart";

export const metadata = {
  title: "Shopping Cart",
  description: "Un simple contador",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products in the Cart</span>
      <CartCounter value={20} />
    </div>
  );
}
