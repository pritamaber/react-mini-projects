const projects = [
  // 📦 Mini Projects
  {
    title: "🧮 useState Counter App",
    path: "/usestate-counter",
    desc: "Basic state management to increment, decrement, and reset a counter.",
    concepts: ["useState", "Event Handling", "State Updates"],
    type: "mini",
  },
  {
    title: "⏱️ useEffect Timer App",
    path: "/useeffect-timer",
    desc: "Timer app demonstrating useEffect with intervals and cleanups.",
    concepts: ["useEffect", "Timers", "Cleanup Functions"],
    type: "mini",
  },
  {
    title: "🎬 Movie Search (Live Filter)",
    path: "/movie-search",
    desc: "Real-time filtering of movie list using controlled input.",
    concepts: ["Controlled Input", "Filtering", "useState"],
    type: "mini",
  },
  {
    title: "📝 Form Handling App",
    path: "/simple-form",
    desc: "Controlled form with multiple input fields and submission logic.",
    concepts: ["Forms", "Controlled Components", "Form Submission"],
    type: "mini",
  },
  {
    title: "🛒 Simple E-Commerce UI",
    path: "/simple-ecom",
    desc: "Product cards fetched from API and displayed using reusable components.",
    concepts: ["Props", "API Fetch", "Reusable Components", "useEffect"],
    type: "mini",
  },
  {
    title: "🔍 GitHub Profile Finder (Debounced)",
    path: "/github-profile-finder",
    desc: "Debounced search for GitHub users with API integration, error handling, and loading states.",
    concepts: [
      "Debounce",
      "Custom Hook",
      "API Calls",
      "Error & Loading States",
    ],
    type: "mini",
  },
  {
    title: "🛍️ Cart App (Context API + useReducer)",
    path: "/cart-context-project",
    desc: "Global cart state management using Context API and useReducer. Add/remove products and share state across components.",
    concepts: [
      "Context API",
      "useReducer",
      "Global State",
      "Component Communication",
    ],
    type: "mini",
  },
  {
    title: "🗺️ GeoTracker – Live Location on Map",
    path: "/map-project",
    desc: "Uses browser geolocation to display current location on an interactive Leaflet map using OpenStreetMap tiles.",
    concepts: [
      "useState",
      "useEffect",
      "Custom Hook",
      "Leaflet.js",
      "Geolocation API",
    ],
    type: "mini",
  },

  // // 🚀 Flagship Projects
  // {
  //   title: "📋 Taskify - Fullstack Task Manager",
  //   path: "https://taskify.impritam.com",
  //   desc: "Fullstack MERN CRUD app with MongoDB, Express, and React. Supports add/edit/delete, form validation, toast notifications, and separate backend at api.impritam.com.",
  //   concepts: ["CRUD", "REST API", "React Router", "Tailwind CSS", "Toastify"],
  //   type: "flagship",
  // },
  {
    title: "🔐 LinkPass – Firebase Auth + Firestore App",
    path: "https://linkpass.impritam.com/dashboard",
    desc: "A secure link manager app with Firebase Auth, Firestore, protected routes, link saving, deletion, and debounced search. Built with React + Tailwind CSS.",
    concepts: [
      "Firebase Auth",
      "Firestore",
      "Protected Routes",
      "React Router",
      "React Toast",
      "Debounced Search",
    ],
    type: "flagship",
  },
  {
    title: "Tagfuse – Kanban for Developers",
    path: "https://tagfuse.impritam.com",
    desc: "A modern, blazing-fast Kanban board app built for devs. Project & tag filters, minimal UI, responsive, and dark mode.",
    github: "https://github.com/pritamaber/tagfuse",
    concepts: ["React", "TailwindCSS", "Firebase Auth", "Vercel", "REST API"],
    type: "flagship",
  },
];

export default projects;
