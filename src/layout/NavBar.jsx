import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";

function NavBar() {
  const { data, isActive } = useContext(AppContext);

  return (
    <div
      className="fixed bottom-0 z-10 bg-primary left-1/2 right-0 flex 
    w-full -translate-x-1/2 justify-between gap-2 sm:rounded-t-3xl bg-accent 
    p-3  shadow-xl [-webkit-backface-visibility:hidden] 
    dark:bg-darkSecondary dark:text-white duration-300"
    >
      <div
        className="md:gap-20 sm:gap-10 gap-5 flex w-full items-center justify-center"
      >
        {data.map(({ Icon, label, href }, i) => (
          <Link to={href} className="no-underline" key={i}>
            <Button
              className={`flex bg-white items-center justify-between rounded-full duration-300 ${
                isActive(href)
                  ? ""
                  : "bg-transparent text-black dark:text-white dark:bg-"
              }`}
              variant={isActive(href) ? "filled" : "text"}
              size="sm"
            >
              {isActive(href) ? "" : <Icon className="text-xl" />}
              <span
                className={`duration-300 ${
                  isActive(href) ? "w-16 text-black" : "w-0"
                }`}
              >
                {isActive(href) && label}
              </span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
