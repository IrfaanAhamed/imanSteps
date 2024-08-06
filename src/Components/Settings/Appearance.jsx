import { Switch } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { LuPaintbrush, LuPaintbrush2 } from "react-icons/lu";
function Appearance() {
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
    <div className="flex justify-between items-center mx-4">
      <div className="flex items-center gap-4">
        <LuPaintbrush2 className="text-2xl dark:text-white" />
        <div className="dark:text-white">
          <h3 className="font-bold  text-[14px]">Dark Mode</h3>
          <p>Receive a daily notification at your preferred time</p>
        </div>
      </div>
      <Switch
        color="green"
        defaultChecked
        className=""
        onClick={toggleTheme}
        crossOrigin={undefined}
      />
    </div>
  );
}

export default Appearance;
