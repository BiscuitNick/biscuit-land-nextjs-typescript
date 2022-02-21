import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dice from ".";
import { standardFaces } from "./standardFaces";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Biscuit-Library/Dice/Dice",
  component: Dice,
} as ComponentMeta<typeof Dice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dice> = (args) => <Dice {...args} />;

export const Example = ({
  size = 200,
  faces = standardFaces,
  minRotation = false,
}: any) => {
  const [n, set] = useState(Math.floor(Math.random() * standardFaces.length));
  const [counter, increment] = useState(0);

  return (
    <Dice
      size={200}
      n={n}
      counter={counter}
      onClick={() => {
        set(Math.floor(Math.random() * standardFaces.length));
        increment(counter + 1);
      }}
      faces={faces}
      margin={0}
      minRotation={minRotation}
    />
  );
};
