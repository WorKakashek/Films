import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import { AiFillLike } from "react-icons/ai";
import React from "react";
interface ICard {
  result: any;
}
const Card = ({ result }: ICard) => {
  return (
    <div className="cursor-pointer  sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 rounded-lg group">
      <Link href={`/movie/${result.id}`}>
        <Image
          alt="no image"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{ maxWidth: "100%", height: "auto" }}
          placeholder="blur"
          blurDataURL="/spiner.svg"
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
        ></Image>
        <div className="p-3">
          <p className="line-clamp-2">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date} <AiFillLike className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
