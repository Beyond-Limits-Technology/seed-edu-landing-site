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
      <div className="w-full h-[80px] shadow-md sticky top-0 left-0 z-[100] bg-white">
        <div className="max-w-7xl mx-auto h-full  flex justify-between items-center lg:px-2 px-4">
          <div>Logo</div>

          <div className="h-full lg:flex hidden items-center xl:gap-8 gap-4">
            {navbarData.map((data) => (
              <NavbarItem key={data.name} data={data} />
            ))}
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
