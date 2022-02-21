import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ToggleSwitch from "./";
import "../../../../styles/globals.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Biscuit-Library/Inputs/ToggleSwitch",
  component: ToggleSwitch,
  argTypes: {},
} as ComponentMeta<typeof ToggleSwitch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToggleSwitch> = (args) => (
  <ToggleSwitch {...args} />
);

export const Toggle = ({ value = true, round = true }: any) => {
  const [toggleValue, setToggle] = useState(value);

  return (
    <ToggleSwitch
      value={toggleValue}
      label={"Toggle"}
      id={"Toggle"}
      onChange={(e: { target: { value: string; checked: boolean } }) =>
        setToggle(e.target.checked)
      }
      round={round}
    />
  );
};
