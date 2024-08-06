import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  IconButton,
} from "@material-tailwind/react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function MainDuaComponent({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }
  const tabsValue = data[1]?.value || "";
  console.log(tabsValue);

  return (
    <div className="dark:text-white flex w-full flex-col h-screen">
      <div className="relative">
        <Link className="absolute top-0 left-0 z-20" to={"/imanSteps/duas"}>
          <IconButton variant="text">
            <IoMdArrowBack className="text-xl dark:text-white text-black" />
          </IconButton>
        </Link>
        <h1 className="flex justify-center ml-5 mt-10 mb-2 font-bold">
          {data[0]?.title || "No title"}
        </h1>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Tabs value={tabsValue}>
          <TabsHeader
            className="rounded-none border-b fixed w-full z-20 dark:bg-darkPrimary/90 border-blue-gray-50 p-0 flex gap-4 overflow-auto pr-4"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 dark:border-white border-gray-900 shadow-none rounded-none",
            }}
          >
            {data.slice(1).map((dataitem, index) => (
              <Tab
                key={index}
                value={dataitem.value}
                className={
                  tabsValue === dataitem.value
                    ? "text-gray-900 dark:text-white"
                    : "dark:text-white"
                }
              >
                {dataitem.id || "No ID"}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.slice(1).map((dataitem, index) => (
              <TabPanel
                key={index}
                value={dataitem.value}
                className="dark:text-white mt-7"
              >
                <div>
                  <p>{dataitem.desc || ""}</p>
                  <p className="font-semibold">{dataitem.time?.time || ""}</p>
                  <p>{dataitem.time?.starting || ""}</p>
                  <p>{dataitem.time?.ending || ""}</p>
                  <p>{dataitem.prayer?.beginning?.time || ""}</p>
                  <p>{dataitem.prayer?.beginning?.arabic || ""}</p>
                  <p>{dataitem.prayer?.beginning?.malayalam || ""}</p>
                  <p className="font-semibold justify-center flex">
                    {dataitem.prayer?.end?.time || ""}
                  </p>
                  <p
                    className="bg-cyan-100 shadow-lg p-2 shadow-cyan-200/90 rounded-lg font-semibold my-2 dark:bg-cyan-900 dark:shadow-cyan-900/40"
                    dir="rtl"
                    dangerouslySetInnerHTML={{
                      __html: dataitem.prayer?.end?.arabic || "",
                    }}
                  />
                  <p
                    className="font-semibold"
                    dangerouslySetInnerHTML={{
                      __html: dataitem.prayer?.end?.malayalam || "",
                    }}
                  />
                  <br />
                  <hr />
                  <p className="mt-2">{dataitem.narrator || ""}</p>
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}

export default MainDuaComponent;
