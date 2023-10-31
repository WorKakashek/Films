import React from "react";
import { LuHome } from "react-icons/lu";
import { LuInfo } from "react-icons/lu";
import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <Menu title={"HOME"} adress={"/"} Icon={LuHome} />
        <Menu title={"About"} adress={"/about"} Icon={LuInfo} />
      </div>
      <div className="">
        <Link href={"/"}>
          <h2 className="text-2xl">
            <span className="font-bold bg-emerald-600 rounded-lg py-2 px-1 mr-1">
              FILMS
            </span>
            <span className="text-xl hidden sm:inline">Ratings</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
