import { rectDefaults } from "../defaults";

export interface textBuild {
  rotation?: number;
  fill?: string;
  stroke?: string;
  draggable?: boolean;
  cornerRadius?: number;
  strokeEnabled?: boolean;
  fillEnabled?: boolean;
  strokeWidthFactor?: number;
  r_width: number;
  r_height: number;
  r_x: number;
  r_y: number;
  absolutes: {
    x?: number;
    y?: number;
    width: number;
    height: number;
  };
}

// Build Methods
//

const buildTextProps = (params: textBuild) => {
  const { r_x, r_y, r_width, r_height, absolutes } = params;
  const { width, height } = absolutes;

  const x = r_x * width;
  const y = r_y * height;
  const w = r_width * width;
  const h = r_height * height;

  let box = {
    x,
    y,
    width: w,
    height: h,
    offsetX: w / 2,
    offsetY: h / 2,
    box: absolutes,
  };

  return { ...params, ...box };
};

export default buildTextProps;
