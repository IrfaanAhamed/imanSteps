import React from "react";
import bakshanam from "../../assets/dailyImages/bakshanam.jpg";
import kidappara from "../../assets/dailyImages/kidapparaDream.jpg";
import shakeHand from "../../assets/dailyImages/shakeHand.png";
import shawchalayam from "../../assets/dailyImages/shawchalayam.jpg";
import thummiyal from "../../assets/dailyImages/thummiyal.jpg";
import vasthram from "../../assets/dailyImages/vasthram.jpg";
import wakingUp from "../../assets/dailyImages/wakingUp.png";
import yathra from "../../assets/dailyImages/yathra.jpg";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export const dailyDuasBody = [
  {
    href: "/bakshanam",
    image: bakshanam,
  },
  {
    href: "/kidappara",
      image: kidappara,
    },
    {
      href: "/shakeHand",
      image: shakeHand,
    },
    {
      href: "/shawchalayam",
      image: shawchalayam,
    },
    {
      href: "/thummiyal",
      image: thummiyal,
    },
    {
      href: "/vasthram",
      image: vasthram,
    },
    {
      href: "/wakingUp",
      image: wakingUp,
    },
    {
      href: "/yathra",
      image: yathra,
    },
  ];
    function Daily() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {dailyDuasBody.map(({ href, image }, i) => (
        <Link to={href} key={i}>
          <Button
            size="sm"
            color="white"
            className=" h-[110px] bg-cover bg-center lg:h-[180px] 
             rounded-2xl w-full drop-shadow-lg dark:shadow-cyan-900/40"
            style={{ backgroundImage: `url(${image})` }}
          />
        </Link>
      ))}
    </div>
  );
}

export default Daily;
