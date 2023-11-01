import Results from "@/components/Results";
import React from "react";

const SearchPage = async ({ params }: any) => {
  const API_KEY = process.env.API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=en-US`
  );

  const data = await res.json();
  const result = data.results;
  return (
    <div>{result ? <Results results={result} /> : <h1>Not Found</h1>}</div>
  );
};

export default SearchPage;
