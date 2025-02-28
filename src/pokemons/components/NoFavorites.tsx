import React from "react";
import { IoHeartOutline } from "react-icons/io5";

const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span className="text-4xl">No Favorites</span>
    </div>
  );
};

export default NoFavorites;
