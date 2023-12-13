import DrawerNestedItem from "./DrawerNestedItem";

const DrawerItem = ({ data, id, activeId, callback }) => {
  return (
    <>
      <button
        onClick={callback}
        className={`w-full min-h-[60px] px-4 flex justify-between items-center hover:bg-gray-50 ${
          activeId === id ? "bg-gray-200" : "bg-white"
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
            className={`w-full flex flex-col border-l  overflow-hidden border-black border-opacity-10 ${
              activeId === id ? "min-h-[50px]" : "h-0"
            }`}
          >
            {data.subData?.map((data) => (
              <DrawerNestedItem key={data.name} data={data} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DrawerItem;
