import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NumberInput from "./";
import "../../../../styles/globals.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Biscuit-Library/Inputs/NumberInput",
  component: NumberInput,
  argTypes: {
    value: {
      defaultValue: 50,
    },
  },
} as ComponentMeta<typeof NumberInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NumberInput> = (args) => (
  <NumberInput {...args} />
);

export const Example = ({
  value = 50,
  min = 0,
  max = 100,
  label = "Example",
  id = "Example",
  step = 1,
}: any) => {
  const [number, setState] = useState(value);

  return (
    <NumberInput
      value={number}
      label={label}
      id={id}
      min={min}
      max={max}
      step={step}
      onChange={(e: { target: { value: number } }) => setState(e.target.value)}
    />
  );
};
