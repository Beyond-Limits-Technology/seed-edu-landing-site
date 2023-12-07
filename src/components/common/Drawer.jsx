import DrawerItem from "./DrawerItem";
import navbarData from "../../data/navbarData";

const Drawer = ({ showDrawer, setShowDrawer }) => {
  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`sm:w-[500px] w-full h-screen fixed top-0 left-0 overflow-y-auto bg-white shadow-md flex flex-col items-start py-4 ${
          showDrawer ? "translate-x-0" : "-translate-x-[100%] "
        } transition-all duration-300 ease-in-out z-[100]`}
      >
        <div className="flex justify-between items-center px-2 w-full">
          <div className="w-[200px] min-h-[100px] flex justify-start items-center text-3xl ">
            <img
              src="/assets/logos/seed-logo-golden.png"
              alt="logo"
              className="w-28 p-2"
            />
          </div>

          <button
            onClick={() => setShowDrawer(false)}
            className="min-w-[30px] h-[30px] rounded-full sm:hidden flex justify-center items-center text-red-600 pr-2"
          >
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_429_11083)">
                <path
                  d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
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
