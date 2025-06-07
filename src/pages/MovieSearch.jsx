import { useState } from "react";
import Searchbar from "../components/Searchbar";
import movieList from "../data/movieList";

export default function SimpleSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = movieList.filter((movie) =>
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-10">
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
          🎬 Movie Search
        </h1>
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
