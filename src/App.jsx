import React, { useContext, useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import { Outlet, useLocation, useMatch } from "react-router-dom";
import { useCategory } from "./Contexts/useCategory";
import Footer from "./Components/Footer";
import { useTheme } from "./Contexts/useTheme";

export default function App() {
  const [isDark, setIsDark] = useContext(useTheme);
  const [hasShadow, setHasShadow] = useState(false);
  const sentinelRef = useRef(null);
  const isHome = useMatch({path: '/', end: true});

  useEffect(() => {
    if (!sentinelRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting === true  => sentinel visible => no shadow
        // entry.isIntersecting === false => scrolled past sentinel => add shadow
        console.log("called!");
        setHasShadow(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className={`w-full ${hasShadow ? "shadow-xs" : ""}`}>
        <nav
          className={`w-full fixed top-0 z-2 bg-(--bg) text-(--text) max-w-[1400px] ${
            hasShadow ? "shadow-md" : ""
          } ${isDark ? "bg-(--bg-body)" : ""} pt-3`}
        >
          <div className="sm:block sm:shadow-md sm:rounded-lg w-[calc(100%-16px)] sm:w-[calc(100%-32px)] mx-auto bg-(--bg)">
            <Header />
          </div>
          {isHome && <Categories />}
          {/* <Categories /> */}
        </nav>
        <div className="h-px" ref={sentinelRef}></div>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
