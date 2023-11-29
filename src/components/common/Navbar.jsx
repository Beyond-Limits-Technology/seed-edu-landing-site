import { useState } from "react";

import navbarData from "../../data/navbarData";
import NavbarItem from "./NavbarItem";
import Drawer from "./Drawer";
// import useDisableScroll from "../hooks/useDisableScroll";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  // useDisableScroll(setShowDrawer);

  return (
    <>
      <div className="w-full h-[40px] bg-[#3A1E13] md:block hidden">
        <div className="max-w-7xl h-full flex justify-between items-center mx-auto lg:px-2 px-4">
          <div className="flex items-center gap-4 text-[#F5BB00] ">
            <a href="mailto:dennykate22@gmail.com">dennykate22@gmail.com</a>
            <a href="tel:09969969969">09969969969</a>
          </div>

          <div className="flex items-center gap-4"></div>
        </div>
      </div>

      <div className="w-full h-[80px] shadow-md sticky top-0 left-0 z-[100] bg-white">
        <div className="max-w-7xl mx-auto h-full  flex justify-between items-center lg:px-2 px-4">
          <div>Logo</div>

          <div className="h-full lg:flex hidden items-center xl:gap-4 gap-4">
            {navbarData.map((data) => (
              <NavbarItem key={data.name} data={data} />
            ))}

            <div className="w-auto h-auto bg-black">
              <button
                onClick={() => window.open("/appointment", "_self")}
                className="px-8 py-3 bg-blue-700 text-white uppercase translate-x-[6px] -translate-y-[6px] hover:translate-x-[3px] hover:-translate-y-[3px]
                active:translate-x-[0px] active:-translate-y-[0px] transition-all duration-300 ease-in-out"
              >
                Appointment
              </button>
            </div>
          </div>

          <button
            onClick={() => setShowDrawer(true)}
            className="lg:hidden block"
          >
            <img
              src="/assets/icons/menu.png"
              alt="menu-burger"
              className="w-[30px]"
            />
          </button>
        </div>
      </div>

      <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </>
  );
};

export default Navbar;
