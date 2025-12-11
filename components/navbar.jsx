"use client";

import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleScroll = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 36; // Leave 12px at the top
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`z-50 fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ${
          showNav
            ? "translate-y-0 backdrop-blur-xl bg-white/60"
            : "-translate-y-full"
        }`}
      >
        <div className="flex flex-row justify-between p-4 text-[#354259]">
          <div>
            <h1
              className="nav-item font-semibold hover:cursor-pointer"
              onClick={() => handleScroll("#home")}
            >
              sarah dickerson
            </h1>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex flex-row space-x-4">
            <h1
              className="nav-item hover:cursor-pointer"
              onClick={() => handleScroll("#about")}
            >
              about
            </h1>
            <h1
              className="nav-item hover:cursor-pointer"
              onClick={() => handleScroll("#projects")}
            >
              projects
            </h1>
            <h1
              className="nav-item hover:cursor-pointer"
              onClick={() => handleScroll("#photography")}
            >
              photography
            </h1>
            <h1
              className="nav-item hover:cursor-pointer"
              onClick={() => handleScroll("#experience")}
            >
              experience
            </h1>
          </div>
          {/* Mobile nav */}
          <div className="md:hidden flex items-center">
            <Drawer>
              <DrawerTrigger asChild>
                <button aria-label="Open menu">
                  <svg
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 10h20M6 16h20M6 22h20" />
                  </svg>
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerClose asChild>
                  <button
                    className="nav-item font-semibold mb-8 bg-transparent border-none"
                    onClick={() => setTimeout(() => handleScroll("#home"), 100)}
                  >
                    sarah dickerson
                  </button>
                </DrawerClose>
                <DrawerClose asChild>
                  <button
                    className="nav-item mb-6 text-2xl bg-transparent border-none"
                    onClick={() =>
                      setTimeout(() => handleScroll("#about"), 100)
                    }
                  >
                    about
                  </button>
                </DrawerClose>
                <DrawerClose asChild>
                  <button
                    className="nav-item mb-6 text-2xl bg-transparent border-none"
                    onClick={() =>
                      setTimeout(() => handleScroll("#projects"), 100)
                    }
                  >
                    projects
                  </button>
                </DrawerClose>
                <DrawerClose asChild>
                  <button
                    className="nav-item mb-6 text-2xl bg-transparent border-none"
                    onClick={() =>
                      setTimeout(() => handleScroll("#photography"), 100)
                    }
                  >
                    photography
                  </button>
                </DrawerClose>
                <DrawerClose asChild>
                  <button
                    className="nav-item mb-6 text-2xl bg-transparent border-none"
                    onClick={() =>
                      setTimeout(() => handleScroll("#experience"), 100)
                    }
                  >
                    experience
                  </button>
                </DrawerClose>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
