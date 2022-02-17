import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ColorPickerSwitch from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Biscuit-Library/Inputs/ColorPickers/ColorPickerSwitch",
  component: ColorPickerSwitch,
  argTypes: {
    value: {
      defaultValue: "#ff00ff",
    },
    toggleValue: {
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof ColorPickerSwitch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ColorPickerSwitch> = (args) => (
  <ColorPickerSwitch {...args} />
);

export const Example = ({ value }) => {
  const [color, setState] = useState(value);
  const [toggleValue, setToggle] = useState(true);

  return (
    <ColorPickerSwitch
      value={color}
      toggleValue={toggleValue}
      label={"PickerSwitch"}
      id={"ColorPickerSwitch"}
      toggleId={"ToggleID"}
      onChange={(e) => setState(e.target.value)}
      onToggle={() => setToggle(!toggleValue)}
    />
  );
};
