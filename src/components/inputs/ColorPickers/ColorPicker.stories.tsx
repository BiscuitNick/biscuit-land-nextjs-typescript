import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ColorPicker from "./ColorPicker";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Biscuit-Library/Inputs/ColorPickers/ColorPicker",
  component: ColorPicker,
  argTypes: {
    value: {
      defaultValue: "#ff00ff",
    },
    toggleValue: {
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof ColorPicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ColorPicker> = (args) => (
  <ColorPicker {...args} />
);

export const Example = ({ value }) => {
  const [color, setState] = useState(value);

  return (
    <ColorPicker
      value={color}
      label={"ColorPicker"}
      id={"ColorPicker"}
      onChange={(e) => setState(e.target.value)}
    />
  );
};
