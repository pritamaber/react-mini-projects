import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import GithubUserCard from "../components/GithubUserCard";
import useDebounce from "../hooks/useDebounce";
import LoadingSpinner from "../components/LoadingSpinner";

function GithubFinder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(searchTerm, 500);
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    if (!debouncedSearch) {
      setUserData(null);
      setError(null);
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(`https://api.github.com/users/${debouncedSearch}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((data) => {
        setUserData(data);
        setError(null);
        setLoading(false);
      })
      .catch(() => {
        setUserData(null);
        setError("User not found ❌");
        setLoading(false);
      });
  }, [debouncedSearch, token]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-10">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
          🔍 GitHub Profile Finder
        </h1>

        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {loading && <LoadingSpinner />}

        {!loading && error && (
          <p className="text-red-500 text-center mt-4 font-medium">{error}</p>
        )}

        {!loading && userData && (
          <div className="mt-6">
            <GithubUserCard
              key={userData.id}
              name={userData.name}
              bio={userData.bio}
              avatar={userData.avatar_url}
              repos={userData.public_repos}
              followers={userData.followers}
              following={userData.following}
              location={userData.location}
              profile={userData.html_url}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default GithubFinder;
