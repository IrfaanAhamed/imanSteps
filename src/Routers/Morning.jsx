import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  IconButton,
} from "@material-tailwind/react";
import { morning } from "../dua&dhikr/duas";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

function Morning() {
  const [activeTab, setActiveTab] = React.useState(morning[1].value);

  const handleSwipe = (dir) => {
    const currentIndex = morning
      .slice(1)
      .findIndex((dataitem) => dataitem.value === activeTab);
    if (dir === "LEFT" && currentIndex < morning.slice(1).length - 1) {
      setActiveTab(morning[currentIndex + 2].value);
    } else if (dir === "RIGHT" && currentIndex > 0) {
      setActiveTab(morning[currentIndex].value);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
    trackMouse: true,
  });

  return (
    <div className="dark:text-white flex w-full flex-col h-screen">
      <div className="relative "> 
        <Link className="absolute top-0 left-0 z-20" to={"/"}>
          <IconButton variant="text">
            <IoMdArrowBack className="text-xl dark:text-white text-black" />
          </IconButton>
        </Link>
        <h1 className="flex justify-center mt-10 mb-2 font-bold">
          {morning[0].title}
        </h1>
      </div>
      <div {...handlers} className="flex-1 overflow-y-auto">
        <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
          <TabsHeader
            className="rounded-none border-b fixed w-full z-20 dark:bg-darkPrimary/90
             border-blue-gray-50 p-0 flex gap-4 overflow-auto pr-4"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 dark:border-white border-gray-900 shadow-none rounded-none",
            }}
          >
            {morning.slice(1).map((dataitem) => (
              <Tab
                key={dataitem.value}
                value={dataitem.value}
                
                className={
                  activeTab === dataitem.value
                    ? "text-gray-900 dark:text-white"
                    : "dark:text-white "
                }
              >
                {dataitem.id}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {morning.slice(1).map((dataitem) => (
              <TabPanel
                key={dataitem.value}
                value={dataitem.value}
                className="dark:text-white mt-7"
              >
                <div>
                  <p>{dataitem.desc}</p>
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

export default Morning;
