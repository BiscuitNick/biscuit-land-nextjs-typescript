import { useState } from "react";

import ColorPickerSwitch from "../Inputs/ColorPickers";
import NumberInput from "../Inputs/NumberInput";
import SelectAttribute from "../Inputs/SelectAttribute";
import TextInput from "../Inputs/TextInput";
import ToggleSwitch from "../Inputs/ToggleSwitch";

import inputAttributes from "../../lib/defaults/inputAttributes";

const sharedColorAttrs = ["fill", "stroke"];
const sharedNumberAttrs = ["r_x", "r_y", "r_width", "r_height", "rotation"];
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
  image: [...sharedNumberAttrs, "r_strokeWidth"],
  rect: [...sharedNumberAttrs, "r_cornerRadius", "r_strokeWidth"],
  text: [...sharedNumberAttrs, "strokeWidthFactor"],
};
const colorAttributes: any = {
  eye: ["innerFill", "innerStroke", "outerFill", "outerStroke"],
  image: sharedColorAttrs,
  rect: sharedColorAttrs,
  text: sharedColorAttrs,
};
const toggleAttributes: any = {
  eye: sharedToggleAttrs,
  image: sharedToggleAttrs,
  rect: sharedToggleAttrs,
  text: sharedToggleAttrs,
};

const selectionAttributes: any = {
  eye: ["innerShape", "outerShape"],
  image: [],
  rect: [],
  text: ["fontStyle", "fontFamily", "align"],
};

const textAttributes: any = {
  eye: [],
  image: ["src"],
  rect: [],
  text: ["textContent"],
};

interface EditorProps {
  selectedID: string;
  contentObject: {
    [key: string]: any;
  };
  setContentObject: ({}: any) => void;
  updateChangeLog: (id: string, value: any) => void;
}

const BiscuitEditor = (editorProps: EditorProps) => {
  const { selectedID, contentObject, setContentObject, updateChangeLog } =
    editorProps;

  const [show, toggle] = useState(true);

  if (selectedID === "") return null;

  const contentType = selectedID.split("_")[0];
  const itemContent = contentObject[selectedID];

  const handleChange = (e: { target: { id: string; value: string } }) => {
    const attr = e.target.id;
    const value = e.target.value;

    updateChangeLog(attr, value);

    setContentObject({
      ...contentObject,
      [selectedID]: {
        ...itemContent,
        [attr]: value,
      },
    });
  };
  const handleToggle = (e: { target: { id: string; checked: boolean } }) => {
    const attr = e.target.id;
    const value = e.target.checked;

    updateChangeLog(attr, value);

    setContentObject({
      ...contentObject,
      [selectedID]: {
        ...itemContent,
        [attr]: value,
      },
    });
  };
  const handleNumberChange = (attr: string, value: number) => {
    updateChangeLog(attr, value);

    setContentObject({
      ...contentObject,
      [selectedID]: {
        ...itemContent,
        [attr]: Number(value),
      },
    });
  };

  const allAttributes = [
    ...numberAttributes[contentType],
    ...colorAttributes[contentType],
    ...toggleAttributes[contentType],
    ...selectionAttributes[contentType],
    ...textAttributes[contentType],
  ];

  const SetAttributes = allAttributes.map((attr: string, i: number) => {
    const params = inputAttributes[attr];
    if (!params) return null;
    const { inputType, label } = params;
    const value = itemContent[attr];

    switch (inputType) {
      case "number": {
        const { scaleCenter, scaleFactor, min, max, step } = params;

        return (
          <NumberInput
            id={attr}
            key={selectedID + "-" + attr}
            label={label}
            value={Math.round((value + scaleCenter) * (scaleFactor || 1))}
            onChange={(e: { target: { value: number } }) => {
              let scaledValue = e.target.value;
              let val = scaledValue / (scaleFactor || 1) - (scaleCenter || 0);

              handleNumberChange(attr, val);
            }}
            min={min}
            max={max}
            step={step}
          />
        );
      }
      case "selection": {
        const { items } = params;
        return (
          <SelectAttribute
            label={label}
            id={attr}
            key={selectedID + "-" + attr}
            value={value}
            items={items || []}
            onChange={handleChange}
          />
        );
      }
      case "colorSwitch": {
        const { toggleId } = params;
        const toggleValue = itemContent[toggleId || ""];
        return (
          <ColorPickerSwitch
            id={attr}
            key={selectedID + "-" + attr}
            label={label}
            toggleId={toggleId || ""}
            value={value}
            toggleValue={toggleValue}
            onChange={handleChange}
            onToggle={handleToggle}
          />
        );
      }
      case "text": {
        return (
          <TextInput
            label={label}
            id={attr}
            key={selectedID + "-" + attr}
            value={value}
            onChange={handleChange}
          />
        );
      }
      case "toggle": {
        return (
          <ToggleSwitch
            id={attr}
            key={selectedID + "-" + attr}
            label={label}
            value={value}
            onChange={handleToggle}
          />
        );
      }
      default: {
        return null;
      }
    }
  });

  return (
    <>
      {show ? (
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
          {SetAttributes}
        </div>
      ) : null}

      <button
        style={{ position: "fixed", top: 0, right: 0 }}
        onClick={() => toggle(!show)}
      >
        Toggle
      </button>
    </>
  );
};

export default BiscuitEditor;
