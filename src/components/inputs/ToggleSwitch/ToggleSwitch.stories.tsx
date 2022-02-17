import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ToggleSwitch from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Biscuit-Library/Inputs/ToggleSwitches/ToggleSwitch",
  component: ToggleSwitch,
  argTypes: { onChange: { action: "clicked" } },
} as ComponentMeta<typeof ToggleSwitch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToggleSwitch> = (args) => (
  <ToggleSwitch {...args} />
);

export const DefaultToggle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultToggle.args = {
  label: "ToggleSwitch",
};

export const SquareToggle = Template.bind({});
SquareToggle.args = {
  id: "toggleID",
  label: "SquareToggle",
  round: false,
};

export const GreenToggle = Template.bind({});
GreenToggle.args = {
  id: "toggleID",
  label: "GreenToggle",
  color: "limegreen",
};
