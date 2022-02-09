const eyeDefaults = {
  props: {
    focalPoint: { x: 0, y: 0 },

    innerRotation: 0,
    outerRotation: 0,
    w2h: 1,
    sensitivity: 1,
    movementFactor: 1,
    //Strings
    innerShape: "Circle",
    outerShape: "Circle",
    innerFill: "#000000",
    outerFill: "#ffffff",
    innerStroke: "#000000",
    outerStroke: "#ffffff",
    //Booleans
    disableClip: false,
  },
  relatives: {
    r_outerSize: 0.05,
    r_outer2inner: 0.5,
    r_x: 0.5,
    r_y: 0.5,
  },
};

export default eyeDefaults;
