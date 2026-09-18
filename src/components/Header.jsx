import { useEffect, useState } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(
    () =>
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;

    setIsDarkMode(newTheme);
    localStorage.setItem("color-theme", newTheme ? "dark" : "light");
  };

  return (
    <header className="container mx-auto mt-10 h-40 px-6 text-center md:h-20">
      {/* Dynamic Logo */}
      <div className="mx-auto h-20 w-48 bg-logo-light-mode bg-no-repeat dark:bg-logo-dark-mode md:absolute md:left-10 md:top-10 md:mx-0" />

      {/* Menu */}
      <div className="flex items-center justify-center space-x-4 md:absolute md:right-10 md:top-12 md:space-x-10">
        <a href="#features" className="hover:text-accentCyan">
          Features
        </a>

        <a href="#testimonials" className="hover:text-accentCyan">
          Testimonials
        </a>

        {/* Dark/Light Mode Button */}
        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          {isDarkMode ? (
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="4" fill="currentColor" />

              <path
                d="M12 2V5M12 19V22M4.93 4.93L7.05 7.05M16.95 16.95L19.07 19.07M2 12H5M19 12H22M4.93 19.07L7.05 16.95M16.95 7.05L19.07 4.93"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
