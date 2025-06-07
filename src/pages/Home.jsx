import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projectsList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4 py-6 font-roboto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-red-600 dark:text-red-400 font-dancing">
        📚 React Fundamental Mini Projects
      </h1>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={project.path}
            className="block border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 shadow hover:shadow-md transition transform hover:-translate-y-1"
          >
            <h2 className="text-base font-semibold text-blue-700 dark:text-blue-400 mb-1">
              🔹 {project.title}
            </h2>
            {project.desc && (
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-snug">
                {project.desc}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
