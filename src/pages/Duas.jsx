import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import Main from "../Components/Home/Main";
import Daily from "../Components/Home/Daily";

function Duas() {
  const data = [
    {
      label: "Main",
      value: "main",
      component: <Main />,
    },
    {
      label: "Daily",
      value: "daily",
      component: <Daily />,
    },
  ];

  return (
    <Tabs value="main" className="my-12 flex flex-col items-center ">
      <div className="fixed left-1/2 right-0 -translate-x-1/2 z-20 
      dark:bg-darkPrimary w-full flex items-center justify-center
      bg-white duration-300">

        <TabsHeader className="w-36 sm:w-44 dark:bg-gray-300 lg:w-56 my-2">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              <div className="flex items-center gap-2">{label}</div>
            </Tab>
          ))}
        </TabsHeader>
      </div>
      <TabsBody className="mt-12">
        {data.map(({ value, component }) => (
          <TabPanel key={value} value={value}>
            {component}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default Duas;
