import React, { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projectsList";

export default function Home() {
  const miniProjects = projects.filter((p) => p.type === "mini");
  const flagshipProjects = projects.filter((p) => p.type === "flagship");

  const [showMini, setShowMini] = useState(true);
  const [showFlagship, setShowFlagship] = useState(false);

  const renderProjectCard = (project, index, isExternal = false) => {
    const Wrapper = isExternal ? "a" : Link;
    const wrapperProps = isExternal
      ? { href: project.path, target: "_blank", rel: "noopener noreferrer" }
      : { to: project.path };

    return (
      <Wrapper
        key={index}
        {...wrapperProps}
        className="block border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-transform transform hover:-translate-y-1"
      >
        <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-2">
          {project.title}
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
      </Wrapper>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4 py-6 font-roboto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-red-600 dark:text-red-400 font-dancing">
        🚀 My Projects
      </h1>

      {/* 🔽 Mini Projects Section */}
      {miniProjects.length > 0 && (
        <div className="mb-10">
          <button
            onClick={() => setShowMini((prev) => !prev)}
            className="block mx-auto mb-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition"
          >
            {showMini ? "🔽 Hide Mini Projects" : "▶️ Show Mini Projects"}
          </button>
          {showMini && (
            <>
              <h2 className="text-2xl font-bold text-center mb-6">
                🧩 Mini Projects
              </h2>
              <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {miniProjects.map((project, index) =>
                  renderProjectCard(project, index)
                )}
              </div>
            </>
          )}
        </div>
      )}

      {/* 🔽 Flagship Projects Section */}
      {flagshipProjects.length > 0 && (
        <div className="mb-10">
          <button
            onClick={() => setShowFlagship((prev) => !prev)}
            className="block mx-auto mb-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full font-medium hover:bg-green-200 dark:hover:bg-green-800 transition"
          >
            {showFlagship
              ? "🔽 Hide Flagship Projects"
              : "▶️ Show Flagship Projects"}
          </button>
          {showFlagship && (
            <>
              <h2 className="text-2xl font-bold text-center mb-6">
                ⚡ Flagship Projects
              </h2>
              <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {flagshipProjects.map((project, index) =>
                  renderProjectCard(project, index, true)
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
