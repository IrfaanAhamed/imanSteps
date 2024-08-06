import React, { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { App as CapacitorApp } from "@capacitor/app";
import { AppContext } from "./AppContext";
import { ImFilm } from "react-icons/im";
import { FaPray } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";
import { GoHome } from "react-icons/go";
import Header from "./layout/Header";
import NavBar from "./layout/NavBar";
import Layout from "./layout/Layout";
import { routeData } from "./dua&dhikr/duaRouter"; // Import routeData
import DuaComponent from "./Routers/MainDuaComponent";
// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const Duas = lazy(() => import("./pages/Duas"));
const Videos = lazy(() => import("./pages/Videos"));
const Settings = lazy(() => import("./pages/Settings"));
const Article = lazy(() => import("./pages/Article"));

function App() {
  const location = useLocation();
  const [state, setState] = useState([
    { Icon: GoHome, label: "Home", href: "/" },
    { Icon: FaPray, label: "Duas", href: "/duas" },
    { Icon: MdOutlineArticle, label: "Article", href: "/article" },
    { Icon: ImFilm, label: "Videos", href: "/videos" },
  ]);
  console.log(routeData);
  useEffect(() => {
    CapacitorApp.addListener("backButton", ({ canGoBack }) => {
      if (!canGoBack) {
        CapacitorApp.exitApp();
      } else {
        window.history.back();
      }
    });
  }, []);

  const isActive = (href) => location.pathname === href;

  return (
    <div className="dark:bg-darkPrimary duration-300">
      <div className="container">
        <AppContext.Provider value={{ data: state, isActive }}>
          <Suspense
            fallback={
              <div className="flex h-screen dark:bg-darkSecondary items-center justify-center absolute left-1/2 right-0 w-full -translate-x-1/2">
                <button
                  type="button"
                  className="text-lg flex items-center font-semibold px-4 py-2 dark:text-white text-black rounded-md"
                  disabled
                >
                  <svg
                    className="animate-spin h-6 w-6 mr-1 "
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-5"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </button>
              </div>
            }
          >
            <Routes>
              <Route 
                element={
                  <>
                    <Header />
                    <Outlet />
                    <NavBar />
                  </>
                }
              >
                <Route path="/" element={<Home />} />
                <Route path="/duas" element={<Duas />} />
                <Route path="/article" element={<Article />} />
                <Route path="/videos" element={<Videos />} />
              </Route>
              <Route element={<Layout />}>
                <Route path="/settings" element={<Settings />} />
              </Route>
              {routeData.map((route, index) => {
                console.log(route.Element);
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={<DuaComponent data={route.Element} />}
                  />
                );
              })}
            </Routes>
          </Suspense>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
