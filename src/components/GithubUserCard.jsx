function GithubUserCard({
  name,
  bio,
  avatar,
  profile,
  repos,
  followers,
  following,
  location,
}) {
  return (
    <div className="p-4 border rounded-xl shadow bg-white dark:bg-gray-800 text-center">
      <img
        src={avatar}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-3"
      />

      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        {name}
      </h2>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
        {bio || "No bio available"}
      </p>

      {location && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          📍 {location}
        </p>
      )}

      <div className="flex justify-center gap-4 text-sm text-gray-700 dark:text-gray-300 my-2">
        <span>📦 {repos} repos</span>
        <span>👥 {followers} followers</span>
        <span>🔁 {following} following</span>
      </div>

      <a
        href={profile}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 hover:underline text-sm"
      >
        View GitHub Profile ↗
      </a>
    </div>
  );
}

export default GithubUserCard;
