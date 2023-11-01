"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBox = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  //@ts-ignore
  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    router.push(`/search/${value}`);
  }
  return (
    <form
      //@ts-ignore
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Search..."
        className="w-full h-14 rounded-sm outline-none bg-transparent flex-1"
      />
      <button
        className="text-emerald-600 disabled:text-gray-600 font-bold"
        type="submit"
        disabled={!value}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
