import { Button } from "@material-tailwind/react";
import morning from "../../assets/mainImages/morning.jpg";
import evening from "../../assets/mainImages/evening.jpg";
import beforeSleep from "../../assets/mainImages/beforeSleep.jpg";
import fasting from "../../assets/mainImages/fasting.jpg";
import natureDisaster from "../../assets/mainImages/natureDisaster.jpg";
import sandarbam from "../../assets/mainImages/sandarbam.jpg";
import swalah from "../../assets/mainImages/swalah.jpg";
import { Link } from "react-router-dom";

export const mainDuasBody = [
  {
    href: "/morning",
    image: morning,
  },
  {
    href: "/evening",
    image: evening,
  },
  {
    href: "/beforeSleep",
    image: beforeSleep,
  },
  {
    href: "/fasting",

    image: fasting,
  },
  {
    href: "/sandarbam",

    image: sandarbam,
  },
  {
    href: "/natureDisaster",
    image: natureDisaster,
  },
  {
    href: "/swalah",
    image: swalah,
  },
];

function Main() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {mainDuasBody.map(({ href, image }, i) => (
        <Link to={href} key={i}>
          <Button
            size="sm"
            color="white"
            className=" h-[100px] bg-cover bg-right-bottom lg:h-[180px] 
            rounded-2xl w-full drop-shadow-lg dark:shadow-cyan-900/40"
            style={{ backgroundImage: `url(${image})` }}
          />
        </Link>
      ))}
    </div>
  );
}

export default Main;
