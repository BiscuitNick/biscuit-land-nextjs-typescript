import { useEffect, useState } from "react";
import useEventListener from "./useEventLIstener";
import isSSR from "../utils/isSSR";

interface WindowSize {
  width: number;
  height: number;
  windowReady: boolean;
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
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
