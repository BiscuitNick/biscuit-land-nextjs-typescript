import React from "react";

const Konva = require("react-konva");
const { Stage, Layer } = Konva;

export interface BoardProps {
  width: number;
  height: number;

  canvasRef?: object;
  children?: any;
}

const Board = (props: BoardProps) => {
  return (
    <Stage width={props.width} height={props.height}>
      <Layer ref={props.canvasRef}>{props.children}</Layer>
    </Stage>
  );
};

export default Board;
