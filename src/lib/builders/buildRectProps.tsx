import { rectDefaults } from "../defaults";

export interface rectBuild {
  props: {
    rotation?: number;
    fill?: string;
    stroke?: string;
    draggable?: boolean;
    cornerRadius?: number;
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
  const { r_x, r_y, r_width, r_height } = rectRelatives;

  const x = r_x * width;
  const y = r_y * height;
  const w = r_width * width;
  const h = r_height * height;

  let box = { x, y, width: w, height: h, offsetX: w / 2, offsetY: h / 2 };

  return { ...rectProps, ...box };
};

export default buildRectProps;
