import { useCallback, useEffect } from "react";

const useDisableScroll = (disable) => {
  const handleWheel = useCallback(
    (e) => {
      if (disable) {
        e.preventDefault();
      }
    },
    [disable]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);
};

export default useDisableScroll;
