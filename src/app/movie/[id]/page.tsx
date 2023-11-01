import Image from "next/image";
import React from "react";

interface Iobject {
  name: string;
}

const MoviePage = async ({ params }: any) => {
  const MovieId = params.id;
  const API_KEY = process.env.API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${MovieId}?api_key=${API_KEY}`
  );
  const movie = await res.json();
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          alt="no image"
          width={500}
          height={300}
          className="rounded"
          style={{ maxWidth: "100%", height: "auto" }}
          placeholder="blur"
          blurDataURL="/spiner.svg"
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p>
            <span className="text-red-600 font-bold">Overview: </span>
            {movie.overview}
          </p>
          <p>
            <span className="text-red-600 font-bold">Release date: </span>
            {movie.release_date}
          </p>
          <p>
            <span className="text-red-600 font-bold">Genre: </span>
            {movie.genres.map((obj: Iobject) => (
              <span className="mr-2">{obj.name}</span>
            ))}
          </p>
          <p className="text-yellow-600">
            <span className="text-red-600 font-bold">Budget: </span>
            {movie.budget}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
