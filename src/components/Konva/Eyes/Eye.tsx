import React from "react";
import { AnimatedRectangle, AnimatedCircle } from "../";
import { getRatio } from "@biscuitnick/biscuit-library";

const SpringKonva = require("@react-spring/konva");
const { animated, useSpring } = SpringKonva;
const Konva = require("react-konva");
const { Group } = Konva;

export interface EyeProps {
  //Element Position
  x: number;
  y: number;

  //Board Width/Height
  width: number;
  height: number;

  w2h?: number;

  outerSize: number;
  outerShape: string;
  outerFill?: string;
  outerStroke?: string;
  outerRotation?: number;

  innerSize: number;
  innerShape: string;
  innerFill?: string;
  innerStroke?: string;
  innerRotation?: number;

  innerStrokeWidth?: number;
  outerStrokeWidth?: number;

  innerXY: { x: number; y: number };

  //Animation & Events
  // focalPoint: any;
  // sensitivity: number;
  // movementFactor: number;
  disableClip?: boolean;
  handleClick?: any;
  handleDrag?: any;

  draggable?: boolean;

  innerFillEnabled?: boolean;
  innerStrokeEnabled?: boolean;
  outerFillEnabled?: boolean;
  outerStrokeEnabled?: boolean;

  contentID: string;
  box?: { width: number; height: number };
}

const Eye = (props: EyeProps) => {
  const {
    x,
    y,
    width,
    height,
    outerSize,
    outerShape,
    outerFill,
    outerStroke,
    outerRotation,

    innerSize,
    innerShape,
    innerFill,
    innerStroke,
    innerRotation,

    // focalPoint,
    disableClip,
    // sensitivity,
    // movementFactor, //InnerShape movement distance // OuterSize*MovmentFactor ==> MovmentRange
    w2h,

    innerXY,

    innerFillEnabled,
    innerStrokeEnabled,
    outerFillEnabled,
    outerStrokeEnabled,

    innerStrokeWidth,
    outerStrokeWidth,

    draggable,
  } = props;

  const ratio = getRatio({ ratio: w2h || 1, sum: 2 });

  const groupProps = {
    offsetX: 0,
    offsetY: 0,
    clipFunc: disableClip
      ? null
      : outerShape === "Circle"
      ? (ctx: any) => ctx.arc(0, 0, outerSize, 0, Math.PI * 2)
      : outerShape === "Rect"
      ? (ctx: any) =>
          ctx.rect(-outerSize, -outerSize, outerSize * 2, outerSize * 2)
      : null,
    id: props.id,
    box: props.box,
  };

  const animatedGroup = useSpring({
    scaleX: ratio[0],
    scaleY: ratio[1],
    rotation: outerRotation || 0,
    x,
    y,
    immediate: ["x", "y"],
  });

  const outerProps = {
    x: 0,
    y: 0,
    fill: outerFill,
    fillEnabled: outerFillEnabled,
    contentID: props.contentID,
    box: props.box,

    // listening: false, //TODO add to Circle and Square Props;
  };

  const outerStrokeProps = {
    x: 0,
    y: 0,
    stroke: outerStroke,
    strokeEnabled: outerStrokeEnabled,
    strokeWidth: outerStrokeWidth,
    // listening: false, //TODO add to Circle and Square Props;
    contentID: props.contentID,
    box: props.box,
  };

  const innerProps = {
    x: innerXY.x || 0,
    y: innerXY.y || 0,
    fill: innerFill,
    stroke: innerStroke,
    fillEnabled: innerFillEnabled,
    strokeEnabled: innerStrokeEnabled,
    strokeWidth: innerStrokeWidth,
    immediateXY: false,
    dragable: false,
    rotation: innerRotation || 0,
    contentID: props.contentID,
    box: props.box,

    // listening: false, //TODO add to Circle and Square Props;
  };

  const OuterFillShape =
    outerShape === "Circle" ? (
      <AnimatedCircle {...outerProps} radius={outerSize} />
    ) : outerShape === "Rect" ? (
      <AnimatedRectangle
        {...outerProps}
        width={outerSize * 2}
        height={outerSize * 2}
        offsetX={outerSize}
        offsetY={outerSize}
      />
    ) : null;

  const OuterStrokeShape =
    outerShape === "Circle" ? (
      <AnimatedCircle {...outerStrokeProps} radius={outerSize} />
    ) : outerShape === "Rect" ? (
      <AnimatedRectangle
        {...outerStrokeProps}
        width={outerSize * 2}
        height={outerSize * 2}
        offsetX={outerSize}
        offsetY={outerSize}
      />
    ) : null;

  const InnerShape =
    innerShape === "Circle" ? (
      <AnimatedCircle {...innerProps} radius={innerSize} /> //TODO // Consideration //  Add Rotation for Circle
    ) : innerShape === "Rect" ? (
      <AnimatedRectangle
        {...innerProps}
        width={innerSize * 2}
        height={innerSize * 2}
        offsetX={innerSize}
        offsetY={innerSize}
      />
    ) : null;

  return (
    <animated.Group
      contentID={props.contentID}
      id={props.contentID}
      {...animatedGroup}
      onDragStart={props.handleDrag}
      onDragEnd={props.handleDrag}
      onClick={props.handleClick}
      draggable={draggable}
      listening={true}
      box={props.box}
    >
      <Group {...groupProps}>
        {OuterFillShape}
        {InnerShape}
      </Group>
      {outerStrokeEnabled ? OuterStrokeShape : null}
    </animated.Group>
  );
};

export default Eye;
