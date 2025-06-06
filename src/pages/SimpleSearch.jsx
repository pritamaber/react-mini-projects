import { useState } from "react";

const movieList = [
  { id: 1, name: "The Shawshank Redemption", imdb: 9.3 },
  { id: 2, name: "The Godfather", imdb: 9.2 },
  { id: 3, name: "The Dark Knight", imdb: 9.0 },
  { id: 4, name: "12 Angry Men", imdb: 9.0 },
  { id: 5, name: "Inception", imdb: 8.8 },
];

export default function SimpleSearch() {
  const [searchMovie, setSearchMovie] = useState("");

  const filtered = movieList.filter((movie) =>
    movie.name.toLowerCase().includes(searchMovie.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto p-6">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
      />
      <ul className="space-y-2">
        {filtered.length > 0 ? (
          filtered.map((movie) => (
            <li key={movie.id} className="p-2 bg-gray-100 rounded shadow">
              {movie.name}{" "}
              <span className="text-sm text-gray-500">
                (IMDb: {movie.imdb})
              </span>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No results</p>
        )}
      </ul>
    </div>
  );
}
