import React, { useRef } from "react";

const Konva = require("react-konva");
const { Stage, Layer } = Konva;

const getStageData = (canvasRef: any) => {
  if (!canvasRef) {
    return null;
  }
  if (!canvasRef.current) return null;
  else {
    const stageData = canvasRef.current.getStage();
    return stageData;
  }
};

export interface BoardProps {
  width: number;
  height: number;

  canvasRef?: object;
  children?: any;
}

const Board = (props: BoardProps) => {
  // const canvasRef = useRef(null);

  return (
    <Stage width={props.width} height={props.height}>
      <Layer ref={props.canvasRef}>{props.children}</Layer>
    </Stage>
  );
};

export default Board;
