import React from "react";
import { Carousel } from "@material-tailwind/react";
import { Badge, Button } from "@material-tailwind/react";
import { mainDuasBody } from "../Components/Home/Main";
import { CheckIcon } from "@heroicons/react/24/outline";
import morning from "../assets/mainImages/morning.jpg";
import evening from "../assets/mainImages/evening.jpg";
import beforeSleep from "../assets/mainImages/beforeSleep.jpg";
import fasting from "../assets/mainImages/fasting.jpg";
import natureDisaster from "../assets/mainImages/natureDisaster.jpg";
import sandarbam from "../assets/mainImages/sandarbam.jpg";
import swalah from "../assets/mainImages/swalah.jpg";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="my-12 duration-300 flex flex-col items-center">
      <Carousel
        transition={{ duration: 1 }}
        className="rounded-xl drop-shadow-lg lg:h-4/5 lg:w-4/5"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {mainDuasBody.map((dua, i) => (
          <Link key={i} to={dua.href}>
            <img
              src={dua.image}
              alt={`image ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </Link>
        ))}
      </Carousel>

      <div className="px-2 flex justify-end w-full md:mt-6 mt-5 md:mr-40 rounded-full">
        <Badge
          content={
            <IoIosNotifications
              className="h-4 w-4 text-white"
              strokeWidth={2.5}
            />
          }
          className="bg-gradient-to-tr from-red-400 to-red-600 border-2
           border-white shadow-lg shadow-black/20"
        >
          <Button className="text-sm py-[4px] pr-5 pl-4" color="red">
            New
          </Button>
        </Badge>
      </div>
    </div>
  );
}

export default Home;
