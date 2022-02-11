import { rectDefaults } from "../defaults";

export interface rectBuild {
  props: {
    rotation?: number;
    fill?: string;
    stroke?: string;
    draggable?: boolean;
    cornerRadius?: number;
    strokeEnabled?: boolean;
    fillEnabled?: boolean;
  };
  absolutes: {
    x?: number;
    y?: number;
    width: number;
    height: number;
  };
  relatives: {
    r_width?: number;
    r_height?: number;
    r_x?: number;
    r_y?: number;
  };
}

// Build Methods
//

const buildRectProps = (params: rectBuild) => {
  const { props, relatives, absolutes } = params;
  const rectProps = { ...rectDefaults.props, ...props };
  const rectRelatives = { ...rectDefaults.relatives, ...relatives };

  const { width, height } = absolutes;
  const { r_x, r_y, r_width, r_height, r_strokeWidth } = rectRelatives;

  const x = r_x * width;
  const y = r_y * height;
  const w = r_width * width;
  const h = r_height * height;

  const strokeWidth = (r_strokeWidth * Math.min(w, h)) / 2;
  const adjustedWidth = w - strokeWidth;
  const adjustedHeight = h - strokeWidth;

  let box = {
    x,
    y,
    width: adjustedWidth,
    height: adjustedHeight,
    offsetX: adjustedWidth / 2,
    offsetY: adjustedHeight / 2,
    strokeWidth,
  };

  return { ...rectProps, ...box };
};

export default buildRectProps;
