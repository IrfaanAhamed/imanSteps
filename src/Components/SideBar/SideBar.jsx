import React from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  UserCircleIcon,

} from "@heroicons/react/24/solid";
import {
 
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function SideBar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div >
      <IconButton variant="text" size="lg" color="white"
       onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer className="dark:bg-darkPrimary" open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] dark:text-white w-full p-4"
        >
          <h2>imanSteps</h2>
          <p>v 0.0.1</p>
          <List className="dark:text-white">
            <hr className="my-2 border-blue-gray-50" />

            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Tasbhi Counter
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Share Our App
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Rate Us
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Feedback
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              FAQs
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              About Life With Allah
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </div>
  );
}

export default SideBar;
