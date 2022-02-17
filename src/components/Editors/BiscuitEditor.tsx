import { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  ColorPickerSwitch,
  NumberInput,
  SelectAttribute,
  TextInput,
  ToggleSwitch,
} from "..";
import { selectedContentIDAtom, contentObjectAtom } from "../../state";

import { SelectionSetters, TextSetters, ToggleSetters } from "../Setters"; //"@biscuitnick/biscuit-library";

import inputAttributes from "../../lib/defaults/inputAttributes";
import { SelectAttr } from "../Inputs/SelectAttribute/SelectAttribute.stories";

const BiscuitEditor = () => {
  const [show, toggle] = useState(true);

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
  const itemContent = contentObject.contentObject[selectedContentID];
  const { props, relatives } = itemContent;

  const handleChange = (e: { target: { id: string; value: string } }) => {
    const id = e.target.id;
    const value = e.target.value;

    updateContent({
      ...contentObject,
      contentObject: {
        ...contentObject.contentObject,
        [selectedContentID]: {
          ...itemContent,
          props: { ...props, [id]: value },
        },
      },
    });
  };
  const handleToggle = (e: { target: { id: string; checked: boolean } }) => {
    const id = e.target.id;
    const value = e.target.checked;

    updateContent({
      ...contentObject,
      contentObject: {
        ...contentObject.contentObject,
        [selectedContentID]: {
          ...itemContent,
          props: { ...props, [id]: value },
        },
      },
    });
  };
  const handlePropNumberChange = (value: number, id: string) => {
    updateContent({
      ...contentObject,
      contentObject: {
        ...contentObject.contentObject,
        [selectedContentID]: {
          ...itemContent,
          props: { ...props, [id]: Number(value) },
        },
      },
    });
  };
  const handleRelativeChange = (value: number, id: string) => {
    updateContent({
      ...contentObject,
      contentObject: {
        ...contentObject.contentObject,
        [selectedContentID]: {
          ...itemContent,
          relatives: { ...relatives, [id]: value },
        },
      },
    });
  };

  const setAttributes = null;

  const SetNumbers = numberAttributes[contentType].map(
    (attr: string, i: number) => {
      const params = inputAttributes[attr];

      if (!params) {
        // alert(attr);
        return null;
      }

      const { label, scaleCenter, scaleFactor, min, max, step } = params;
      const isRelative = attr.split("_")[0].length === 1;
      const value = isRelative ? relatives[attr] : props[attr];

      return (
        <NumberInput
          id={attr}
          key={selectedContentID + "-" + attr}
          label={label}
          value={Math.round((value + scaleCenter) * (scaleFactor || 1))}
          onChange={(e: { target: { value: number } }) => {
            let scaledValue = e.target.value;
            let val = scaledValue / (scaleFactor || 1) - (scaleCenter || 0);

            if (isRelative) {
              handleRelativeChange(val, attr);
            } else {
              handlePropNumberChange(val, attr);
            }
          }}
          min={min}
          max={max}
          step={step}
        />
      );
    }
  );
  const SetColors = colorAttributes[contentType].map(
    (attr: string, i: number) => {
      const params = inputAttributes[attr];

      if (!params) {
        // alert(attr);
        return null;
      }

      const { label, toggleId } = params;
      const value = props[attr];
      const toggleValue = props[toggleId || ""];
      return (
        <ColorPickerSwitch
          id={attr}
          key={selectedContentID + "-" + attr}
          label={label}
          toggleId={toggleId || ""}
          value={value}
          toggleValue={toggleValue}
          onChange={handleChange}
          onToggle={handleToggle}
        />
      );
    }
  );
  const SetToggles = toggleAttributes[contentType].map(
    (attr: string, i: number) => {
      const params = inputAttributes[attr];

      if (!params) {
        // alert(attr);
        return null;
      }

      const { label } = params;
      const value = props[attr];
      return (
        <ToggleSwitch
          id={attr}
          key={selectedContentID + "-" + attr}
          label={label}
          value={value}
          onChange={handleToggle}
        />
      );
    }
  );

  const SetSelections = toggleAttributes[contentType].map(
    (attr: string, i: number) => {
      const params = inputAttributes[attr];

      if (!params) {
        // alert(attr);
        return null;
      }

      const { label, items } = params;
      const value = props[attr];
      return (
        <SelectAttribute
          label={label}
          id={attr}
          key={selectedContentID + "-" + attr}
          value={value}
          items={items || []}
          onChange={handleChange}
        />
      );
    }
  );

  const SetTexts = textAttributes[contentType].map(
    (attr: string, i: number) => {
      const params = inputAttributes[attr];

      if (!params) {
        // alert(attr);
        return null;
      }

      const { label } = params;
      const value = props[attr];
      return (
        <TextInput
          label={label}
          id={attr}
          key={selectedContentID + "-" + attr}
          value={value}
          onChange={handleChange}
        />
      );
    }
  );

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
          {SetNumbers}
          {SetColors}
          {SetToggles}
          {SetSelections}
          {SetTexts}
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
