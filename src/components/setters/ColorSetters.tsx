import React from "react";

import { ColorPickerSwitch } from "../inputs";
interface ColorSettersProps {
  selectedContentID: string;
  contentObject: {
    contentIDs: string[];
    [key: string]: any;
  };
  updateContent: Function;
  attributes: string[];
}

interface ColorPickerSwitches {
  [key: string]: any;
}

const ColorSetters = (colorProps: ColorSettersProps) => {
  const { selectedContentID, contentObject, updateContent, attributes } =
    colorProps;
  if (selectedContentID === "") return null;

  const selectedContent = contentObject.contentObject[selectedContentID];
  const { props } = selectedContent;
  const {
    fill,
    stroke,
    fillEnabled,
    strokeEnabled,
    innerFill,
    outerFill,
    innerStroke,
    outerStroke,
    innerStrokeEnabled,
    outerStrokeEnabled,
    innerFillEnabled,
    outerFillEnabled,
  } = props;

  const handleChange = (e: { target: { id: string; value: string } }) => {
    const id = e.target.id;
    const value = e.target.value;

    const { props } = selectedContent;

    updateContent({
      ...contentObject,
      contentObject: {
        ...contentObject.contentObject,
        [selectedContentID]: {
          ...selectedContent,
          props: { ...props, [id]: value },
        },
      },
    });
  };

  const handleToggle = (e: { target: { id: string; checked: boolean } }) => {
    const id = e.target.id;
    const value = e.target.checked;

    const { props } = selectedContent;

    updateContent({
      ...contentObject,
      contentObject: {
        ...contentObject.contentObject,
        [selectedContentID]: {
          ...selectedContent,
          props: { ...props, [id]: value },
        },
      },
    });
  };

  const ColorPickerSwitches: ColorPickerSwitches = {
    fill: (
      <ColorPickerSwitch
        id={"fill"}
        label={"Fill"}
        value={fill}
        onChange={handleChange}
        toggleId={"fillEnabled"}
        toggleValue={fillEnabled}
        onToggle={handleToggle}
      />
    ),
    stroke: (
      <ColorPickerSwitch
        id={"stroke"}
        label={"Stroke"}
        value={stroke}
        onChange={handleChange}
        toggleId={"strokeEnabled"}
        toggleValue={strokeEnabled}
        onToggle={handleToggle}
      />
    ),
    innerFill: (
      <ColorPickerSwitch
        id={"innerFill"}
        label={"InnerFill"}
        value={innerFill}
        onChange={handleChange}
        toggleId={"innerFillEnabled"}
        toggleValue={innerFillEnabled}
        onToggle={handleToggle}
      />
    ),
    innerStroke: (
      <ColorPickerSwitch
        id={"innerStroke"}
        label={"InnerStroke"}
        value={innerStroke}
        onChange={handleChange}
        toggleId={"innerStrokeEnabled"}
        toggleValue={innerStrokeEnabled}
        onToggle={handleToggle}
      />
    ),
    outerFill: (
      <ColorPickerSwitch
        id={"outerFill"}
        label={"OuterFill"}
        value={outerFill}
        onChange={handleChange}
        toggleId={"outerFillEnabled"}
        toggleValue={outerFillEnabled}
        onToggle={handleToggle}
      />
    ),
    outerStroke: (
      <ColorPickerSwitch
        id={"outerStroke"}
        label={"OuterStroke"}
        value={outerStroke}
        onChange={handleChange}
        toggleId={"outerStrokeEnabled"}
        toggleValue={outerStrokeEnabled}
        onToggle={handleToggle}
      />
    ),
  };

  return (
    <>
      {attributes.map((attr: string) =>
        Object.keys(ColorPickerSwitches).includes(attr)
          ? ColorPickerSwitches[attr]
          : null
      )}
    </>
  );
};

export default ColorSetters;
