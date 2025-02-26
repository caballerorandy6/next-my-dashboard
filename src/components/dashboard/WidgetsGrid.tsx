"use client";

import { SimpleWidget } from "./SimpleWidget";
import { IoCafeOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";

const WidgetsGrid = () => {
  const inCart = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 justify-center">
      <SimpleWidget
        title={inCart.toString()}
        subTitle="Added Products"
        label="Counter"
        icon={<IoCafeOutline size={50} className="text-blue-500" />}
        href="/dashboard/counter"
      />
    </div>
  );
};

export default WidgetsGrid;
