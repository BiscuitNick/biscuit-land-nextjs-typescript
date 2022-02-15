import React from "react";
const SpringKonva = require("@react-spring/konva");
const { animated, useSpring } = SpringKonva;
const Konva = require("react-konva");
const { Circle } = Konva;

export interface CircleProps {
  //Position
  x: number;
  y: number;

  //Size
  radius: number;

  //Style
  fill?: string;
  stroke?: string;
  fillEnabled?: boolean;
  strokeEnabled?: boolean;
  strokeWidth?: number;

  //Interactions
  canvasRef?: object;
  draggable?: boolean;
  handleClick?: any;
  handleDrag?: any;
  immediateXY?: boolean;
}

const MyCircle = (props: CircleProps) => {
  const {
    x,
    y,
    radius,
    fill,
    stroke,
    fillEnabled,
    strokeEnabled,
    strokeWidth,
  } = props;
  const circleSpring = useSpring({ radius, fill, stroke, strokeWidth });
  const xySpring = useSpring({
    x,
    y,
    immediate: props.immediateXY || false,
  });

  return (
    <animated.Circle
      {...circleSpring}
      {...xySpring}
      draggable={props.draggable}
      fillEnabled={fillEnabled}
      strokeEnabled={strokeEnabled}
      onClick={props.handleClick}
      onDragStart={props.handleDrag}
      onDragEnd={props.handleDrag}
    />
  );
};

export default MyCircle;
