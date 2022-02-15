import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextInput from "./TextInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Biscuit-Library/Inputs/TextInputs/TextInput",
  component: TextInput,
  argTypes: { onChange: { action: "clicked" } },
} as ComponentMeta<typeof TextInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const DefaultTextInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultTextInput.args = {
  label: "TextInput",
  value: "Some Text",
};
