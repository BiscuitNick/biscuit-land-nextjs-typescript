import React from "react";

import { NumberInput } from "../inputs";
interface NumberSetterProps {
  selectedContentID: string;
  contentObject: {
    contentIDs: string[];
    [key: string]: any;
  };
  updateContent: Function;
  attributes: string[];
}

interface NumberInputs {
  [key: string]: any;
}

const NumberSetters = (numberProps: NumberSetterProps) => {
  const { selectedContentID, contentObject, updateContent, attributes } =
    numberProps;
  if (selectedContentID === "") return null;

  const selectedContent = contentObject.contentObject[selectedContentID];
  const { relatives, props } = selectedContent;
  const {
    rotation,
    w2h,
    sensitivity,
    movementFactor,
    innerRotation,
    outerRotation,
  } = props;
  const {
    r_x,
    r_y,
    r_width,
    r_height,
    r_outerSize,
    r_outer2inner,
    r_strokeWidth,
  } = relatives;

  const handlePropChange = (value: number, id: string) => {
    // console.log(selectedContent, value, id);

    updateContent({
      ...contentObject,
      contentObject: {
        ...contentObject.contentObject,
        [selectedContentID]: {
          ...selectedContent,
          props: { ...props, [id]: Number(value) },
        },
      },
    });
  };

  const handleRelativeChange = (value: number, id: string) => {
    // console.log(selectedContent, value, id);

    updateContent({
      ...contentObject,
      contentObject: {
        ...contentObject.contentObject,
        [selectedContentID]: {
          ...selectedContent,
          relatives: { ...relatives, [id]: value },
        },
      },
    });
  };

  const NumberInputs: NumberInputs = {
    r_x: (
      <NumberInput
        id="r_x"
        label="X-Axis"
        value={Math.round((r_x - 0.5) * 100)}
        onChange={(e: { target: { value: number } }) => {
          let scaledValue = e.target.value;
          let val = scaledValue / 100 + 0.5;
          handleRelativeChange(val, "r_x");
        }}
        min={-100}
        max={100}
        step={1}
      />
    ),
    r_y: (
      <NumberInput
        id="r_y"
        label="Y-Axis"
        value={Math.round((r_y - 0.5) * 100)}
        onChange={(e: { target: { value: number } }) => {
          let scaledValue = e.target.value;
          let val = scaledValue / 100 + 0.5;
          handleRelativeChange(val, "r_y");
        }}
        min={-100}
        max={100}
        step={1}
      />
    ),
    r_width: (
      <NumberInput
        id="r_width"
        label="Width"
        value={Math.round(r_width * 100)}
        onChange={(e: { target: { value: number } }) => {
          let scaledValue = e.target.value;
          let val = scaledValue / 100;
          handleRelativeChange(val, "r_width");
        }}
        min={0}
        max={200}
        step={1}
      />
    ),
    r_height: (
      <NumberInput
        id="r_height"
        label="Height"
        value={Math.round(r_height * 100)}
        onChange={(e: { target: { value: number } }) => {
          let scaledValue = e.target.value;
          let val = scaledValue / 100;
          handleRelativeChange(val, "r_height");
        }}
        min={0}
        max={200}
        step={1}
      />
    ),
    r_strokeWidth: (
      <NumberInput
        id="r_strokeWidth"
        label="StrokeWidth"
        value={Math.round(r_strokeWidth * 100)}
        onChange={(e: { target: { value: number } }) => {
          let scaledValue = e.target.value;
          let val = scaledValue / 100;
          handleRelativeChange(val, "r_strokeWidth");
        }}
        min={0}
        max={100}
        step={1}
      />
    ),
    rotation: (
      <NumberInput
        id={"rotation"}
        label="Rotation"
        value={rotation}
        onChange={(e: { target: { value: number } }) =>
          handlePropChange(Number(e.target.value), "rotation")
        }
        min={-180}
        max={180}
        step={1}
      />
    ),
    w2h: (
      <NumberInput
        id={"w2h"}
        label={"w2h"}
        value={w2h}
        onChange={(e: { target: { value: number } }) =>
          handlePropChange(e.target.value, "w2h")
        }
        min={0.5}
        max={2}
        step={0.1}
      />
    ),
    sensitivity: (
      <NumberInput
        id={"sensitivity"}
        label={"Sensitivity"}
        value={sensitivity}
        onChange={(e: { target: { value: number } }) =>
          handlePropChange(e.target.value, "sensitivity")
        }
        min={0}
        max={2}
        step={0.25}
      />
    ),
    movementFactor: (
      <NumberInput
        id={"movementFactor"}
        label={"Movement Range"}
        value={movementFactor}
        onChange={(e: { target: { value: number } }) =>
          handlePropChange(e.target.value, "movementFactor")
        }
        min={0}
        max={2}
        step={0.25}
      />
    ),
    r_outerSize: (
      <NumberInput
        id={"r_outerSize"}
        label={"Eye Size"}
        value={Math.round(r_outerSize * 200)}
        onChange={(e: { target: { value: number } }) => {
          let scaledValue = e.target.value;
          let val = scaledValue / 200;
          handleRelativeChange(val, "r_outerSize");
        }}
        min={0}
        max={100}
        step={1}
      />
    ),
    r_outer2inner: (
      <NumberInput
        id={"r_outer2inner"}
        label={"Inner Size"}
        value={Math.round(r_outer2inner * 100)}
        onChange={(e: { target: { value: number } }) => {
          let scaledValue = e.target.value;
          let val = scaledValue / 100;
          handleRelativeChange(val, "r_outer2inner");
        }}
        min={0}
        max={100}
        step={1}
      />
    ),
    innerRotation: (
      <NumberInput
        id={"innerRotation"}
        label={"InnerRotation"}
        value={innerRotation}
        onChange={(e: { target: { value: number } }) =>
          handlePropChange(e.target.value, "innerRotation")
        }
        min={-180}
        max={180}
        step={1}
      />
    ),
    outerRotation: (
      <NumberInput
        id={"outerRotation"}
        label={"OuterRotation"}
        value={outerRotation}
        onChange={(e: { target: { value: number } }) =>
          handlePropChange(e.target.value, "outerRotation")
        }
        min={-180}
        max={180}
        step={1}
      />
    ),
  };

  return (
    <>
      {attributes.map((attr: string) =>
        Object.keys(NumberInputs).includes(attr) ? NumberInputs[attr] : null
      )}
    </>
  );
};

export default NumberSetters;
