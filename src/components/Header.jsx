export default function Header() {
  return (
    <header className="w-full py-6 px-4 text-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm">
      <div className="mb-2 text-base">
        This project series is part of Pritam's portfolio at{" "}
        <a
          href="https://impritam.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold hover:text-blue-600 dark:hover:text-blue-400"
        >
          impritam.com
        </a>
      </div>

      <div className="flex justify-center flex-wrap gap-4 text-sm mt-2">
        <a
          href="https://projects.impritam.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600 dark:hover:text-blue-400 font-medium"
        >
          Projects ↗
        </a>
        <a
          href="https://impritam.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600 dark:hover:text-blue-400 font-medium"
        >
          Portfolio ↗
        </a>
        <a
          href="https://github.com/pritamaber/react-mini-projects"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600 dark:hover:text-blue-400 font-medium"
        >
          GitHub Repo ↗
        </a>
      </div>

      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Pritam Das. All rights reserved.
      </div>
    </header>
  );
}
