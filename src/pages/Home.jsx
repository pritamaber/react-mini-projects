import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projectsList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4 py-6 font-roboto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-600 dark:text-red-400 font-dancing">
        📚 React Fundamental Mini Projects
      </h1>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={project.path}
            className="block border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-2">
              🔹 {project.title}
            </h2>

            {project.desc && (
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                {project.desc}
              </p>
            )}

            {project.concepts && (
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.concepts.map((concept, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
