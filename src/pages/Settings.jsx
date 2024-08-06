import React from "react";
import Notification from "../Components/Settings/Notification";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Appearance from "../Components/Settings/Appearance";
import { LuPaintbrush } from "react-icons/lu";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoIosArrowForward, IoMdArrowBack } from "react-icons/io";
import More from "../Components/Settings/More";

function Icon({ id, open }) {
  return (
    <IoIosArrowForward
      className={`${
        id === open ? "rotate-90 mr-3" : ""
      } h-5 w-5 transition-transform mr-3`}
    />
  );
}

function Settings() {
 
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="dark:bg-darkPrimary h-screen
   ">
      <div
        className="flex justify-center h-10 bg-primary w-full
        items-center absolute left-1/2 -translate-x-1/2 right-0
        dark:bg-darkSecondary/70 dark:text-white duration-300"
      >
        <Link className="absolute top-0 left-0" to={"/"}>
          <IconButton variant="text">
            <IoMdArrowBack className="text-xl dark:text-white text-black" />
          </IconButton>
        </Link>
        <h1 className="font-bold">Settings</h1>
      </div>
      <div
        className="absolute top-10 left-1/2 right-0 -translate-x-1/2
        flex flex-col w-full "
      >
        <Accordion open={open === 1} icon={<Icon id={1} open={open}/>}>
          <AccordionHeader onClick={() => handleOpen(1)} className="bg-primary/20 
          dark:bg-darkSecondary dark:text-white duar">
            <div className="flex justify-between items-center w-full mx-4">
              <div className="flex items-center space-x-2">
                <LuPaintbrush className="text-xl" />
                <h2 className="text-[1rem]">Appearance</h2>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <Appearance />
          </AccordionBody>
        </Accordion>
    
        <Accordion open={open === 2} icon={<Icon id={2} open={open}/>}>
          <AccordionHeader onClick={() => handleOpen(2)}className="bg-primary/20 
          dark:bg-darkSecondary dark:text-white">
            <div className="flex justify-between items-center w-full mx-4">
              <div className="flex items-center space-x-2">
                <HiOutlineNewspaper className="text-xl" />
                <h2 className="text-[1rem]">More</h2>
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody>
            <More />
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}

export default Settings;
