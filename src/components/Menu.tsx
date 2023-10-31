import Link from "next/link";
import React from "react";

interface IMenuProps {
  title: String;
  adress: string | URL;
  Icon: any;
}

const Menu = ({ title, adress, Icon }: IMenuProps) => {
  return (
    <div>
      <Link
        href={adress}
        className="mx-4 lg:mx-6 hover:text-emerald-600 transition-all"
      >
        <Icon className="text-2xl sm:hidden mr-4" />
        <p className="hidden sm:inline">{title}</p>
      </Link>
    </div>
  );
};

export default Menu;
