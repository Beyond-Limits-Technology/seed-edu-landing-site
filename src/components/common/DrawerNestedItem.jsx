import { useState } from "react";

const DrawerNestedItem = ({ data }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <button
        onClick={() => setActive((prev) => !prev)}
        className={`w-full flex justify-between items-center pr-3`}
      >
        <a
          key={data.name}
          href={data.link}
          className="text-lg !cursor-pointer font-[400] w-full tracking-wide text-black transition-all ease-in-out h-[50px] flex items-center whitespace-nowrap
             sm:pl-8 pl-4"
        >
          {data.name}
        </a>

        {data?.subData && (
          <img
            src="/assets/icons/down.png"
            alt=""
            className="w-[10px] cursor-pointer"
          />
        )}
      </button>

      {data?.subData && (
        <div className="w-full bg-gray-50  sm:pl-10 pl-6">
          <div
            className={`w-full flex flex-col overflow-hidden ${
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

export default DrawerNestedItem;
