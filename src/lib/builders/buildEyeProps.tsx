import { eyeDefaults } from "../defaults";

export interface eyeBuild {
  props: {
    focalPoint?: number;
    innerRotation?: number;
    outerRotation?: number;
    w2h?: number;
    sensitivity?: number;
    movementFactor?: number;
    innerShape?: string;
    outerShape?: string;
    innerFill?: string;
    outerFill?: string;
    innerStroke?: string;
    outerStroke?: string;
    disableClip?: boolean;
  };
  absolutes: {
    x?: number;
    y?: number;
    width: number;
    height: number;
  };
  relatives: {
    r_outerSize?: number;
    r_outer2inner?: number;
    r_x?: number;
    r_y?: number;
    r_outerStrokeWidth?: number;
    r_innerStrokeWidth?: number;
  };
}

// Build Methods
//

const buildEyeProps = (params: eyeBuild) => {
  const { props, relatives, absolutes } = params;
  const eyeProps = { ...eyeDefaults.props, ...props };
  const eyeRelatives = { ...eyeDefaults.relatives, ...relatives };

  const { width, height } = absolutes;
  const {
    r_outerSize,
    r_outer2inner,
    r_x,
    r_y,
    r_outerStrokeWidth,
    r_innerStrokeWidth,
  } = eyeRelatives;
  const x = r_x * width;
  const y = r_y * height;

  const outerSize = (r_outerSize * (width + height)) / 2;
  const outerStrokeWidth = outerSize * (r_outerStrokeWidth || 0);
  const adjustedOuterSize = outerSize - outerStrokeWidth / 2;

  const innerSize = outerSize * r_outer2inner;
  const innerStrokeWidth = innerSize * (r_innerStrokeWidth || 0);
  const adjustedInnerSize = innerSize - innerStrokeWidth / 2;

  return {
    ...eyeProps,
    ...absolutes,
    outerSize: adjustedOuterSize,
    innerSize: adjustedInnerSize,

    innerStrokeWidth,
    outerStrokeWidth,

    x,
    y,
    box: absolutes,
  };
};

export default buildEyeProps;
