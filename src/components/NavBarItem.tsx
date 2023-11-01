"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
interface INavBarItem {
  title: String;
  param: String;
}
const NavBarItem = ({ title, param }: INavBarItem) => {
  const SearchParams = useSearchParams();
  const genre = SearchParams.get("genre");
  return (
    <div>
      <Link
        href={`/?genre=${param}`}
        className={`m-4 hover:text-emerald-100 font-semibold p-2 ${
          genre && genre === param
            ? "underline underline-offset-4 decoration-4 decoration-red-500 rounded-lg"
            : ""
        }`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavBarItem;
