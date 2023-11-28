import { useState } from "react";

const DrawerItem = ({ data }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <button
        onClick={() => setActive((prev) => !prev)}
        className={`w-full min-h-[60px] px-4 flex justify-between items-center hover:bg-gray-50 ${
          active ? "bg-gray-50" : "bg-white"
        }`}
      >
        <a
          href={data.link}
          className="text-lg font-[400] uppercase cursor-pointer tracking-wider"
        >
          {data.name}
        </a>

        {data?.subData.length > 0 && (
          <img
            src="/assets/icons/down.png"
            alt=""
            className="w-[10px] cursor-pointer"
          />
        )}
      </button>

      {data?.subData?.length > 0 && (
        <div className="w-full bg-gray-50  sm:pl-10 pl-6">
          <div
            className={`w-full flex flex-col border-l overflow-hidden border-black border-opacity-10 ${
              active ? "min-h-[50px]" : "h-0"
            }`}
          >
            {data.subData?.map((data) => (
              <a
                key={data.name}
                href={data.link}
                className="text-lg !cursor-pointer font-[400] tracking-wide text-black transition-all ease-in-out h-[50px] flex items-center whitespace-nowrap
             sm:pl-8 pl-4"
              >
                {data.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DrawerItem;
