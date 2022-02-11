import { useRecoilValue, useRecoilState } from "recoil";
import { selectedContentIDAtom, contentObjectAtom } from "../state/atoms";

import {
  SelectionSetters,
  TextSetters,
  ToggleSetters,
  ColorSetters,
  NumberSetters,
} from "@biscuitnick/biscuit-library";

// import {} from "@biscuitnick/biscuit-library";

const Editor = () => {
  const selectedContentID = useRecoilValue(selectedContentIDAtom);
  const [contentObject, updateContent] = useRecoilState(contentObjectAtom);
  if (selectedContentID === "") return null;

  const sharedProps = {
    selectedContentID,
    contentObject,
    updateContent,
  };

  const contentType = selectedContentID.split("_")[0];

  const sharedColorAttrs = ["fill", "stroke"];
  const sharedNumberAttrs = [
    "r_x",
    "r_y",
    "r_width",
    "r_height",
    "rotation",
    "r_strokeWidth",
  ];
  const sharedToggleAttrs = ["draggable"];

  const numberAttributes: any = {
    eye: [
      "r_x",
      "r_y",
      "w2h",
      "r_outerSize",
      "r_outer2inner",
      "r_innerStrokeWidth",
      "r_outerStrokeWidth",
      "innerRotation",
      "outerRotation",
      "sensitivity",
      "movementFactor",
    ],
    image: [...sharedNumberAttrs],
    rect: [...sharedNumberAttrs, "r_cornerRadius"],
  };
  const colorAttributes: any = {
    eye: ["innerFill", "innerStroke", "outerFill", "outerStroke"],
    image: sharedColorAttrs,
    rect: sharedColorAttrs,
  };
  const toggleAttributes: any = {
    eye: sharedToggleAttrs,
    image: sharedToggleAttrs,
    rect: sharedToggleAttrs,
  };

  const selectionAttributes: any = {
    eye: ["innerShape", "outerShape"],
    image: [],
    rect: [],
  };

  const textAttributes: any = {
    eye: [],
    image: ["src"],
    rect: [],
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        width: 500,
        padding: 10,

        maxHeight: "100vh",
        overflow: "auto",

        gridGap: 10,
      }}
    >
      <ToggleSetters
        {...sharedProps}
        attributes={toggleAttributes[contentType]}
      />

      <NumberSetters
        {...sharedProps}
        attributes={numberAttributes[contentType]}
      />

      <ColorSetters
        {...sharedProps}
        attributes={colorAttributes[contentType]}
      />

      <SelectionSetters
        {...sharedProps}
        attributes={selectionAttributes[contentType]}
      />
      <TextSetters {...sharedProps} attributes={textAttributes[contentType]} />
    </div>
  );
};

export default Editor;
