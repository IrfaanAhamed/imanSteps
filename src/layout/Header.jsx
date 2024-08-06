import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import { IoMdSettings } from "react-icons/io";
import SideBar from "../Components/SideBar/SideBar";
import { AppContext } from "../AppContext";
import "./style.css";
function Header() {
  const { data, isActive } = useContext(AppContext);
  const currentItem = data.find((item) => isActive(item.href));

  return (
    <div className="">
      <div className="fixed top-0 left-0 z-40">
        <SideBar />
      </div>
      <div
        className="fixed top-0 w-full h-12 right-0 left-0
        bg-primary flex justify-between items-center
        z-30 dark:bg-darkSecondary md:text-xl duration-300"
      >
        <div></div>
        <div
          className="title font-bold dark:text-white absolute left-1/2 
          -translate-x-1/2 right-0 flex justify-center"
        >
          <h2 className="animated-title">
            {currentItem ? currentItem.label : ""}
          </h2>
        </div>
        <div className="flex items-center mr-2">
          <Link to={"/imanSteps/settings"}>
            <IconButton variant="text">
              <IoMdSettings className="text-2xl ml-2 text-black dark:text-white" />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
