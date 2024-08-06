import React, { useEffect, useState } from "react";
import dayMode from "../../assets/dayMode.png";
import darkMode from "../../assets/darkMode.png";

function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
 

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative ">
      <img
        onClick={toggleTheme}
        className={`absolute w-8  transition-all cursor-pointer 
        duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
        src={dayMode}
        alt="Day mode"
      />
      <img
        onClick={toggleTheme}
        className={`transition-all w-8 cursor-pointer duration-300 ${theme === "light" ? "opacity-0" : "opacity-100"}`}
        src={darkMode}
        alt="Dark mode"
      />
    </div>
  );
}

export default DarkMode;
