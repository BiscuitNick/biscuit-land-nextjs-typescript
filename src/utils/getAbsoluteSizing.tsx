export interface absoluteSizingParams {
  relatives: { r_x: number; r_y: number; r_width: number; r_height: number };
  box: { width: number; height: number; x?: number; y?: number };
}

const getAbsoluteSizing = (params: absoluteSizingParams) => {
  const { relatives, box } = params;
  const { r_x, r_y, r_width, r_height } = relatives;
  const { width, height, x, y } = box;

  const w = r_width * width;
  const h = r_height * height;

  return {
    x: r_x * width,
    y: r_y * height,
    width: w,
    height: h,
    offsetX: w / 2,
    offsetY: h / 2,
  };
};

export default getAbsoluteSizing;
