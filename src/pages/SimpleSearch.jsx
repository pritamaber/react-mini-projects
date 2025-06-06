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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-10">
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
          🎬 Movie Search
        </h1>

        <input
          type="text"
          placeholder="🔍 Search movies..."
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />

        <ul className="space-y-3">
          {filtered.length > 0 ? (
            filtered.map((movie) => (
              <li
                key={movie.id}
                className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm flex justify-between items-center"
              >
                <span className="font-medium text-gray-800 dark:text-gray-100">
                  {movie.name}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  IMDb: {movie.imdb}
                </span>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-400">
              No matching movies found.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}
