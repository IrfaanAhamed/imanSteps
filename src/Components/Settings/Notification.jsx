import { Switch } from "@material-tailwind/react";
import { IoNotificationsOutline } from "react-icons/io5";

function Notification() {
  return (
    <div className="flex justify-between items-center mx-4">
      <div className="flex items-center gap-4">
        <IoNotificationsOutline className="text-2xl dark:text-white" />
        <div className="dark:text-white">
          <h3 className="font-bold  text-[14px]">Dark Mode</h3>
          <p>Receive a daily notification at your preferred time</p>
        </div>
      </div>
      <Switch
        color="green"
        defaultChecked
        className=""
        crossOrigin={undefined}
      />
    </div>
  );
}

export default Notification;
