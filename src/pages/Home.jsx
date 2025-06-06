import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projectsList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">
        🛠️ React Fundamental Mini Projects
      </h1>

      <ul className="max-w-xl mx-auto space-y-4">
        {projects.map((project, index) => (
          <li key={index}>
            <Link
              to={project.path}
              className="block px-6 py-4 rounded-lg border border-gray-300 dark:border-gray-700 shadow hover:shadow-md bg-white dark:bg-gray-800 transition hover:bg-blue-50 dark:hover:bg-gray-700"
            >
              <span className="text-lg font-medium text-gray-800 dark:text-gray-100">
                🔹 {project.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
