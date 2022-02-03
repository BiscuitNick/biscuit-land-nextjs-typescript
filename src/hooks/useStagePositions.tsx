import { useState } from "react";
import { getStageData } from "@biscuitnick/react-biscuit";
import useInterval from "./useInterval";

export interface StagePositions {
  canvasRef: any;
  delay?: number;
}

export interface XYs {
  x: number;
  y: number;
}

export const useStagePositions = ({ canvasRef, delay }: StagePositions) => {
  const [xy, set] = useState<XYs>({ x: 0, y: 0 });

  useInterval(() => {
    const stageData = getStageData(canvasRef);
    if (!stageData) return null;
    const pointer = stageData.getPointerPosition();
    if (!pointer) return null;
    if (pointer.x === xy.x && pointer.y === xy.y) return null;
    set({ x: pointer.x || 0, y: pointer.y || 0 });
  }, delay || 200);

  return xy;
};
