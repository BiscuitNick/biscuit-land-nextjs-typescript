export interface getInnerPositionParams {
  focalPoint: { x: number; y: number };
  x: number;
  y: number;
  width: number;
  height: number;
  movementFactor: number;
  outerSize: number;
  sensitivity: number;
}

const getInnerPosition = (params: getInnerPositionParams) => {
  const {
    focalPoint,
    x,
    y,
    width,
    height,
    movementFactor,
    outerSize,
    sensitivity,
  } = params;
  const xDelta = focalPoint.x - x;
  const yDelta = focalPoint.y - y;

  const movmentRange = outerSize * movementFactor;

  const xDistance = (xDelta / width) * sensitivity * movmentRange;
  const yDistance = (yDelta / height) * sensitivity * movmentRange;

  const innerX =
    xDistance > movmentRange
      ? movmentRange
      : xDistance < -movmentRange
      ? -movmentRange
      : xDistance;

  const innerY =
    yDistance > movmentRange
      ? movmentRange
      : yDistance < -movmentRange
      ? -movmentRange
      : yDistance;
  return { x: innerX, y: innerY };
};

export default getInnerPosition;
