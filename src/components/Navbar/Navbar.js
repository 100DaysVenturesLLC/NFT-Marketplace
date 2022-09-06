import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Logo from "../../assets/icons/Ellipse 4.png";
import { FiUser } from "react-icons/fi";
import DarkModeToggle from "react-dark-mode-toggle";
import Button from "../Button/Button";
import useDarkMode from "../../hook/useDarkMode";
import user from "../../assets/icons/user.svg";
import { CgMenuRight, CgClose } from "react-icons/cg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  const [lightToggle, setLightToggle] = React.useState(
    colorTheme === "dark" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setLightToggle(checked);
  };
  const genericHamburgerLine = `h-1 w-6 my-1  bg-black transition ease transform duration-300`;

  // useEffect(() => {
  // 	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // 		setLightToggle('light');
  // 	} else {
  // 		setLightToggle('dark');
  // 	}
  // }, []);

  // const handleThemeSwitch = () => {
  // 	setLightToggle(lightToggle === 'dark' ? 'light' : 'dark');
  // };

  // useEffect(() => {
  // 	if (lightToggle === 'dark') {
  // 		document.documentElement.classList.add('dark');
  // 	} else {
  // 		document.documentElement.classList.remove('dark');
  // 	}
  // }, [lightToggle]);

  return (
    <nav className="bg-[#0c111a] sticky dark:bg-white sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-10">
      <nav className="  ">
        <div className="max-w-8xl container  lg:py-2  lg:px-8 mx-auto  ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/">
                  <img className="h-8 w-8" src={Logo} alt="Workflow" />
                </a>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex  space-x-4 items-center">
                  <div>
                    <form class="flex items-center">
                      <label
                        for="simple-search text-white dark:text-black"
                        class="sr-only"
                      >
                        Search
                      </label>
                      <div class="relative w-full">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          class="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="simple-search"
                        class="bg-[#303F50] w-5/6 border border-[#303F50] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                        required
                      />
                    </div>
                    </form>
                  </div>
                  <a
                    href="/explore"
                    className=" dark:text-foreground-secondary text-white px-6 py-2 dark:text-red rounded-md text-md font-bold"
                  >
                    Explore
                  </a>

                  <a
                    href="/stats"
                    className="text-white dark:text-foreground-secondary hover:text-white px-6 py-2 rounded-md text-md font-bold"
                  >
                    Stats
                  </a>

                  <a
                    href="/createnft"
                    className="text-white dark:text-foreground-secondary  hover:text-white px-6 py-2 rounded-md text-md font-bold"
                  >
                    Create
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center space-x-8 ">
              <DarkModeToggle
                onChange={toggleDarkMode}
                checked={lightToggle}
                size={56}
                // onClick={handleThemeSwitch}
              />
              <div className="hidden md:block ">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-8  ">
                   <a href="/profile">
                   <FiUser
                      className="text-white dark:text-black
                    "
                      size={"1.5em"}
                    />
                    </a> 
              


                    <Button className="text-white border-1 rounded-lg dark:text-foreground-secondary dark:border-black">
                      Connect Wallet
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex md:hidden">
                <button
                  className="lg:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className="absolute w-5 transform dark:bg-black -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <span
                      className={`absolute h-0.5 w-5 bg-white dark:bg-black transform transition duration-300 ease-in-out ${
                        isOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
                      }`}
                    ></span>
                    <span
                      className={`absolute h-0.5 bg-white dark:bg-black transform transition-all duration-200 ease-in-out ${
                        isOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
                      }`}
                    ></span>
                    <span
                      className={`absolute h-0.5 w-5 bg-white dark:bg-black transform transition duration-300 ease-in-out ${
                        isOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
                      }`}
                    ></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="px-2 pt-2 pb-3 space-y-1 flex  flex-col items-center sm:px-3 bg-background-primary dark:bg-white absolute w-full"
              >
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white dark:text-foreground-secondary block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-white dark:text-foreground-secondary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-white dark:text-foreground-secondary  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 dark:text-foreground-secondary dark:text-bg-slate-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 dark:text-foreground-secondary hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </nav>
  );
}

export default Navbar;
