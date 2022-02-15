import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SelectAttribute from "./SelectAttribute";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Biscuit-Library/Inputs/SelectInputs/SelectAttribute",
  component: SelectAttribute,
  argTypes: { onChange: { action: "clicked" } },
} as ComponentMeta<typeof SelectAttribute>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectAttribute> = (args) => (
  <SelectAttribute {...args} />
);

export const SelectAttr = ({ value, label, id, items = [] }) => {
  const [state, setState] = useState(value);

  return (
    <SelectAttribute
      value={state}
      label={label}
      id={id}
      onChange={(e) => setState(e.target.value)}
      items={items}
    />
  );
};
