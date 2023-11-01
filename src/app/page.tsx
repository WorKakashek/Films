import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";

const API_KEY = process.env.API_KEY;
export default async function Home({ searchParams }: any) {
  const genre = searchParams.genre || "TopRating";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "TopRating" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page-1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  const result = data.results;
  if (!res.ok) {
    throw new Error("Failled to fetch data");
  }
  return (
    <>
      <SearchBox />
      <Results results={result} />
    </>
  );
}
