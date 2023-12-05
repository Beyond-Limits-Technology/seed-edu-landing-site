const NavbarItem = ({ data, isScrollActive }) => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex items-center gap-2 py-2 group">
        <div className="flex items-center gap-2 h-[80px]">
          <a
            href={data.link}
            className={`text-[14px] font-[400] uppercase cursor-pointer tracking-wide ${
              isScrollActive ? "text-black" : "text-white"
            }`}
          >
            {data.name}
          </a>

          {data.subData.length > 0 && (
            <svg
              fill={isScrollActive ? "black" : "white"}
              xmlns="http://www.w3.org/2000/svg"
              width="800px"
              height="800px"
              viewBox="0 0 52 52"
              enableBackground="new 0 0 52 52"
              xmlSpace="preserve"
              className="w-[14px]"
            >
              <path d="M8.3,14h35.4c1,0,1.7,1.3,0.9,2.2L27.3,37.4c-0.6,0.8-1.9,0.8-2.5,0L7.3,16.2C6.6,15.3,7.2,14,8.3,14z" />
            </svg>
          )}
        </div>

        {data.subData.length > 0 && (
          <div className="relative -left-[100%] top-4 ">
            <div className={`absolute top-0 left-0 `}>
              <div
                className={`bg-white rounded-md shadow-2xl  flex-col items-start 
           transition-all duration-300 ease-in-out justify-center 
           min-w-[240px]  py-4 hidden group-hover:flex`}
              >
                {data.subData?.map((data) => (
                  <div key={data.name} className="relative group/nested w-full">
                    <div className="flex items-center gap-2 px-4 ">
                      <a
                        href={data.link}
                        className="text-base !cursor-pointer font-[400] tracking-wide text-black  hover:text-[#F5BB00] transition-all ease-in-out 
                    h-[40px] flex items-center whitespace-nowrap w-full "
                      >
                        {data.name}
                      </a>

                      {data?.subData && (
                        <img
                          src="/assets/icons/down.png"
                          alt=""
                          className="w-[10px] cursor-pointer -rotate-90"
                        />
                      )}
                    </div>
                    {data?.subData && (
                      <div className="min-w-[240px] p-2 bg-white absolute top-0 right-[-100%] z-10 shadow-md rounded-md hidden group-hover/nested:block">
                        {data?.subData?.map((data) => (
                          <a
                            key={data.name}
                            href={data.link}
                            className="text-base !cursor-pointer font-[400] tracking-wide text-black  hover:text-[#F5BB00] transition-all ease-in-out
                             px-1 h-[40px] flex items-center whitespace-nowrap "
                          >
                            {data.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarItem;
