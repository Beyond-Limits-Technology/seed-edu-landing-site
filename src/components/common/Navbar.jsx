import { useMemo, useState } from "react";

import navbarData from "../../data/navbarData";
import NavbarItem from "./NavbarItem";
import Drawer from "./Drawer";
import useScrollOffset from "../../hooks/useScrollOffset";
// import useDisableScroll from "../hooks/useDisableScroll";

const Navbar = ({ active }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const offset = useScrollOffset();

  const isScrollActive = useMemo(
    () => (active ? active : offset > 0),
    [offset]
  );

  // useDisableScroll(setShowDrawer);

  return (
    <>
      <div
        className={`w-full h-[80px] fixed top-0 left-0 z-[100] ${
          isScrollActive ? "bg-white shadow-md " : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full  flex justify-between items-center lg:px-2 px-2">
          <a href="/">
            <img
              src="/assets/logos/seed-logo-golden.png"
              alt="logo"
              className="w-28"
            />
          </a>

          <div className="h-full lg:flex hidden items-center xl:gap-6 gap-4">
            {navbarData.map((data) => (
              <NavbarItem
                isScrollActive={isScrollActive}
                key={data.name}
                data={data}
              />
            ))}

            <a
              // onClick={() => window.open("/appointment", "_self")}
              href="/appointment"
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 active:translate-y-[2px] text-white uppercase rounded-full "
            >
              Appointment
            </a>
          </div>

          <button
            onClick={() => setShowDrawer(true)}
            className="lg:hidden block"
          >
            <svg
              className="w-[45px] h-[45px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke={isScrollActive ? "black" : "white"}
            >
              <path d="M5 12H18" strokeWidth="2" strokeLinecap="round" />
              <path d="M5 17H11" strokeWidth="2" strokeLinecap="round" />
              <path d="M5 7H15" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <Drawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
    </>
  );
};

export default Navbar;
