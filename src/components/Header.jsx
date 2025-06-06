export default function Header() {
  return (
    <header className="w-full text-center text-sm py-4 px-2 space-x-4 bg-transparent text-gray-700 dark:text-gray-300">
      <span className="block mb-2">
        This project series is part of Pritam's portfolio at{" "}
        <a
          href="https://taglet.in"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-600 dark:hover:text-blue-400"
        >
          taglet.in
        </a>
      </span>
      <a
        href="https://projects.taglet.in"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block underline hover:text-blue-600 dark:hover:text-blue-400"
      >
        Projects ↗
      </a>
      <a
        href="https://taglet.in"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block underline hover:text-blue-600 dark:hover:text-blue-400"
      >
        Portfolio ↗
      </a>
      <a
        href="https://github.com/pritamaber/react-fundamental-projects"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block underline hover:text-blue-600 dark:hover:text-blue-400"
      >
        GitHub Repo ↗
      </a>
    </header>
  );
}
