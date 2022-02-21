interface inputAttributes {
  [key: string]: {
    inputType: "number" | "colorSwitch" | "toggle" | "selection" | "text";
    label: string;

    //NumberAttr
    scaleCenter?: number;
    scaleFactor?: number;
    min?: number;
    max?: number;
    step?: number;

    //ColorSwitch
    toggleId?: string;

    items?: string[];

    active?: boolean;
  };
}

const inputAttributes: inputAttributes = {
  opacity: {
    inputType: "number",
    label: "Opacity",
    scaleCenter: 0,
    scaleFactor: 100,
    min: 0,
    max: 100,
    step: 1,
  },
  r_x: {
    inputType: "number",
    label: "X",
    scaleCenter: -0.5,
    scaleFactor: 100,
    min: -100,
    max: 100,
    step: 1,
  },
  r_y: {
    inputType: "number",
    label: "Y",
    scaleCenter: -0.5,
    scaleFactor: 100,
    min: -100,
    max: 100,
    step: 1,
  },
  r_width: {
    inputType: "number",
    label: "Width",
    scaleCenter: 0,
    scaleFactor: 100,
    min: 0,
    max: 200,
    step: 1,
  },
  r_height: {
    inputType: "number",
    label: "Height",
    scaleCenter: 0,
    scaleFactor: 100,
    min: 0,
    max: 200,
    step: 1,
  },
  rotation: {
    inputType: "number",
    label: "Rotation",
    scaleCenter: 0,
    scaleFactor: 1,
    min: -180,
    max: 180,
    step: 1,
  },
  r_strokeWidth: {
    inputType: "number",
    label: "StrokeWidth",
    scaleCenter: 0,
    scaleFactor: 100,
    min: 0,
    max: 100,
    step: 1,
  },

  //EYE
  r_outerSize: {
    inputType: "number",
    label: "Eye Size",
    scaleCenter: 0,
    scaleFactor: 200,
    min: 0,
    max: 100,
    step: 1,
  },
  r_outer2inner: {
    inputType: "number",
    label: "Inner Size",
    scaleCenter: 0,
    scaleFactor: 100,
    min: 0,
    max: 100,
    step: 1,
  },
  w2h: {
    inputType: "number",
    label: "W2H",
    scaleCenter: 0,
    scaleFactor: 100,
    min: 40,
    max: 160,
    step: 1,
  },
  r_innerStrokeWidth: {
    inputType: "number",
    label: "Inner StrokeWidth",
    scaleCenter: 0,
    scaleFactor: 100,
    min: 0,
    max: 100,
    step: 1,
  },
  r_outerStrokeWidth: {
    inputType: "number",
    label: "Outer StrokeWidth",
    scaleCenter: 0,
    scaleFactor: 100,
    min: 0,
    max: 100,
    step: 1,
  },
  innerRotation: {
    inputType: "number",
    label: "Inner Rotation",
    scaleCenter: 0,
    scaleFactor: 1,
    min: -180,
    max: 180,
    step: 1,
  },
  outerRotation: {
    inputType: "number",
    label: "Outer Rotation",
    scaleCenter: 0,
    scaleFactor: 1,
    min: -180,
    max: 180,
    step: 1,
  },
  movementFactor: {
    inputType: "number",
    label: "Movement Range",
    scaleCenter: 0,
    scaleFactor: 50,
    min: 0,
    max: 100,
    step: 5,
  },
  sensitivity: {
    inputType: "number",
    label: "Movement Sensitivity",
    scaleCenter: 0,
    scaleFactor: 50,
    min: 0,
    max: 100,
    step: 5,
  },

  //Text
  strokeWidthFactor: {
    inputType: "number",
    label: "Outer StrokeWidth",
    scaleCenter: 0,
    scaleFactor: 200,
    min: 0,
    max: 40,
    step: 1,
  },

  fill: {
    inputType: "colorSwitch",
    label: "Fill",
    toggleId: "fillEnabled",
  },
  stroke: {
    inputType: "colorSwitch",
    label: "Stroke",
    toggleId: "strokeEnabled",
  },
  innerFill: {
    inputType: "colorSwitch",
    label: "InnerFill",
    toggleId: "innerFillEnabled",
  },
  outerFill: {
    inputType: "colorSwitch",
    label: "OuterFill",
    toggleId: "outerFillEnabled",
  },
  innerStroke: {
    inputType: "colorSwitch",
    label: "InnerStroke",
    toggleId: "innerStrokeEnabled",
  },
  outerStroke: {
    inputType: "colorSwitch",
    label: "OuterStroke",
    toggleId: "outerStrokeEnabled",
  },

  //Toggles

  draggable: {
    inputType: "toggle",
    label: "Draggable",
  },
  active: {
    inputType: "toggle",
    label: "Active",
  },
  fillEnabled: {
    inputType: "toggle",
    label: "Draggable",
  },
  strokeEnabled: {
    inputType: "toggle",
    label: "Draggable",
  },
  innerStrokeEnabled: {
    inputType: "toggle",
    label: "InnerStrokeEnabled",
  },
  outerStrokeEnabled: {
    inputType: "toggle",
    label: "OuterStrokeEnabled",
  },
  blink: {
    inputType: "toggle",
    label: "Blink",
  },
  animate: {
    inputType: "toggle",
    label: "Animate",
  },

  //Selection
  innerShape: {
    inputType: "selection",
    label: "InnerShape",
    items: ["Circle", "Rect"],
  },
  outerShape: {
    inputType: "selection",
    label: "OuterShape",
    items: ["Circle", "Rect"],
  },
  fontStyle: {
    inputType: "selection",
    label: "FontStyle",
    items: ["normal", "italic", "bold", "italic bold"],
  },
  fontFamily: {
    inputType: "selection",
    label: "FontFamily",
    items: [
      "Open Sans",
      "Roboto Condensed",
      "Roboto Mono",
      "Roboto",
      "Ubuntu",
      "Rubik",
      "Bebas Neue",
      "Lobster",
      "Lobster Two",
      "Comfortaa",
      "Staatliches",
      "Balsamiq Sans",
      "Alfa Slab One",
      "Righteous",
      "Fredoka One",
      "Concert One",
      "Luckiest Guy",
      "Poiret One",
      "Sigmar One",
      "Arima Madurai",
      "Bangers",
      "Playball",
      "Monoton",
      "Black Ops One",
      "Audiowide",
      "Gruppo",
      "Bubblegum Sans",
      "Chewy",
      "Fredericka the Great",
      "Cabin Sketch",
      "Bungee Inline",
      "Creepster",
      "Love Ya Like A Sister",
      "Wallpoet",
      "Bungee Shade",
      "Megrim",
      "Unkempt",
      "Codystar",
      "Kranky",
      "New Rocker",
      "Sarina",
      "Modak",
      "Barrio",
      "Tourney",
      "Kavoon",
    ],
  },
  align: {
    inputType: "selection",
    label: "Align",
    items: ["left", "center", "right"],
  },
  verticalAlign: {
    inputType: "selection",
    label: "Vertical Align",
    items: ["top", "middle", "bottom"],
  },

  src: {
    inputType: "text",
    label: "Image Url",
  },
  textContent: {
    inputType: "text",
    label: "Text Content",
  },
};

export default inputAttributes;
