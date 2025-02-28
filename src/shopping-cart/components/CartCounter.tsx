"use client";

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store";
import {
  addOne,
  substractOne,
  initCounterState,
} from "@/store/counter/counterSlice";

interface Props {
  value?: number;
}

export interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const response = await fetch("/api/counter", { cache: "no-store" });
  const data = await response.json();
  console.log({ data });
  return data;
};

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // Use the `useEffect` hook to initialize the counter state
  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then((data) => dispatch(initCounterState(data.count)));
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl"> {count} </span>

      <div className="flex">
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>

        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
};
