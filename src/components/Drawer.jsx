import { DrawerItem } from ".";
import navbarData from "../data/navbarData";

const Drawer = ({ showDrawer, setShowDrawer }) => {
  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`sm:w-[500px] w-full h-screen fixed top-0 left-0 overflow-y-auto bg-white shadow-md flex flex-col items-start py-4 ${
          showDrawer ? "translate-x-0" : "-translate-x-[100%]"
        } transition-all duration-300 ease-in-out z-[100]`}
      >
        <div className="flex justify-between items-center px-2 w-full">
          <div className="w-[200px] min-h-[100px] flex justify-start items-center text-3xl ">
            Logo
          </div>

          <button
            onClick={() => setShowDrawer(false)}
            className="w-[30px] h-[30px] rounded-md bg-red-600 sm:hidden flex justify-center p-[6px] items-center"
          >
            <img
              src="/assets/icons/cross.png"
              alt="cross"
              className="w-full object-cover"
            />
          </button>
        </div>

        {navbarData?.map((data) => (
          <DrawerItem key={data.name} data={data} />
        ))}
      </div>

      <div
        onClick={() => setShowDrawer(false)}
        className={`w-screen h-screen bg-black bg-opacity-20 fixed top-0 left-0 ${
          showDrawer ? "block" : "hidden"
        }`}
      />
    </>
  );
};

export default Drawer;
