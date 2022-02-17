import { useState } from "react";
//import getStageData from "../utils/getStageData";

// import useInterval from "./useInterval";

import { getStageData, useInterval } from "@biscuitnick/biscuit-library";

export interface StagePositions {
  canvasRef: any;
  delay?: number;
}

const useStagePositions = ({ canvasRef, delay }: StagePositions) => {
  const [xy, set] = useState({ x: 0, y: 0 });
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useInterval(() => {
    const stageData = getStageData(canvasRef);
    if (!stageData) return null;
    const pointer = stageData.getPointerPosition();
    if (!pointer) return null;
    if (pointer.x === x && pointer.y === y) return null;
    if (pointer.x !== x) setX(pointer.x);
    if (pointer.y !== y) setY(pointer.y);

    // set({ x: pointer.x || 0, y: pointer.y || 0 });
  }, delay || 200);

  return { x, y };
};

export default useStagePositions;
