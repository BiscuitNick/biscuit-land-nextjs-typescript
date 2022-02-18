import React, { useRef } from "react";
const SpringKonva = require("@react-spring/konva");
const { animated, useSpring } = SpringKonva;
const Konva = require("react-konva");
const { Rect } = Konva;

export interface RectProps {
  //Dimensions & Sizing
  width: number;
  height: number;
  x: number;
  y: number;
  offsetX?: number;
  offsetY?: number;

  fill?: string;
  stroke?: string;
  strokeWidth?: number;

  rotation?: number;
  handleClick?: any;
  handleDrag?: any;

  contentID: string;
  box?: { width: number; height: number };

  fillEnabled?: boolean;
  strokeEnabled?: boolean;
  draggable?: boolean;
  immediateXY?: boolean;

  listening?: boolean;
}

const AnimatedRectangle = (props: RectProps) => {
  const { handleClick, draggable } = props;
  const {
    x,
    y,
    width,
    height,
    fill,
    stroke,
    strokeWidth,
    rotation,
    offsetX,
    offsetY,
    fillEnabled,
    strokeEnabled,
  } = props;

  const springProps = useSpring({
    x,
    y,
    width,
    height,
    fill,
    stroke,
    strokeWidth,
    rotation,
    offsetX,
    offsetY,
  });

  const xySpring = useSpring({
    x,
    y,
    immediate: props.immediateXY || false,
  });

  return (
    <animated.Rect
      contentID={props.contentID}
      id={props.contentID}
      box={props.box}
      {...springProps}
      {...xySpring}
      fillEnabled={fillEnabled}
      strokeEnabled={strokeEnabled}
      draggable={draggable}
      onClick={handleClick}
      onDragStart={props.handleDrag}
      onDragEnd={props.handleDrag}
      listening={props.listening}
    />
  );
};

export default AnimatedRectangle;
