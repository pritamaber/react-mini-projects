import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projectsList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4 py-10 font-roboto">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-red-600 dark:text-red-400 font-dancing">
        📚 React Fundamental Mini Projects
      </h1>

      <div className="max-w-3xl mx-auto grid gap-6">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={project.path}
            className="block border border-gray-300 dark:border-gray-700 rounded-xl p-6 bg-white dark:bg-gray-800 shadow hover:shadow-md transition transform hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
              🔹 {project.title}
            </h2>
            {project.description && (
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
