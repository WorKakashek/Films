import React from "react";
import NavBarItem from "./NavBarItem";

const NavBaar = () => {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-emerald-600 p-4 lg:text-lg">
      <NavBarItem title={"Trending"} param={"Trending"} />
      <NavBarItem title={"Top Rating"} param={"TopRating"} />
    </div>
  );
};

export default NavBaar;
