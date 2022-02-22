import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DiceIndex from "../../pages/dice";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Biscuit-Library/Pages/Dice",
  component: DiceIndex,

  argTypes: {},
} as ComponentMeta<typeof DiceIndex>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Page: ComponentStory<typeof DiceIndex> = (args) => <DiceIndex />;

// export const Example = () => {
//   return <DiceIndex />;
// };
