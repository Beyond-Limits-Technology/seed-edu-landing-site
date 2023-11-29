const NavbarItem = ({ data }) => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex items-center gap-2 py-2 group">
        <div className="flex items-center gap-2">
          <a
            href={data.link}
            className="text-[14px] font-[400] uppercase cursor-pointer tracking-wide"
          >
            {data.name}
          </a>

          {data.subData.length > 0 && (
            <img
              src="/assets/icons/down.png"
              alt=""
              className="w-[10px] cursor-pointer"
            />
          )}
        </div>

        {data.subData.length > 0 && (
          <div className="relative -left-[100%] top-4 ">
            <div className={`absolute top-0 left-0 `}>
              <div
                className={`bg-white rounded-md shadow-2xl  flex-col items-start 
           transition-all duration-300 ease-in-out justify-center 
           min-w-[240px] min-h-[100px] py-4 hidden group-hover:flex`}
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
