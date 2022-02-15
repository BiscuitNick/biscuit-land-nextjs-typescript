import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NumberInput from "./NumberInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Biscuit-Library/Inputs/NumberInputs/NumberInput",
  component: NumberInput,
  argTypes: {
    value: {
      defaultValue: 50,
    },
    min: {
      defaultValue: 0,
    },
    max: { defaultValue: 100 },
    onChange: { action: "range" },
  },
} as ComponentMeta<typeof NumberInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NumberInput> = (args) => (
  <NumberInput {...args} />
);

export const SliderExample = ({ value, label, id, max, min, step }) => {
  const [state, setState] = useState(value);

  return (
    <NumberInput
      value={state}
      min={min}
      max={max}
      step={step}
      label={"SliderExample"}
      id={"SLiderExampe"}
      onChange={(e) => setState(Number(e.target.value))}
    />
  );
};
