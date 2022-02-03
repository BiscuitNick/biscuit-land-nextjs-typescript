import { useEffect, useState } from "react";
import useEventListener from "./useEventLIstener";
import isSSR from "../utils/isSSR";

interface WindowSize {
  width: number; //| undefined;
  height: number; //| undefined;
  windowReady: boolean;
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
    windowReady: false,
  });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      windowReady: !isSSR,
    });
  };

  useEventListener({ type: "resize", listener: handleSize });

  // Set size at the first client-side load
  useEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
}

export default useWindowSize;
