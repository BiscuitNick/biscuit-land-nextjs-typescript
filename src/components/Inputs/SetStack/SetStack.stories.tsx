import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SetStack from "./";
import "../../../../styles/globals.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Biscuit-Library/Inputs/SetStack",
  component: SetStack,
  argTypes: {
    contentObject: {
      defaultValue: {
        eye_0: { name: "First Eye", outerFill: "#000fff", active: true },
        eye_1: { name: "Second Eye", outerFill: "#000000", active: true },
        image_0: {
          name: "Image",
          src: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*",
          active: true,
        },
      },
    },
  },
} as ComponentMeta<typeof SetStack>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof SetStack> = (args) => (
  <Example {...args} />
);

export const Example = ({ contentObject }: any) => {
  // const [contentObj, setContentObject] = useState(contentObject);

  const [contentObj, setContentObj] = useState(contentObject);

  const [contentOrder, setOrder] = useState(
    Object.keys(contentObject).map((_, i) => i)
  );
  const [contentIDs, setIDs] = useState(
    Object.keys(contentObject).map((id) => id)
  );

  const update = (newOrder: number[], stack: string[]) => {
    console.log(
      "NEW ORDER",
      newOrder,
      newOrder.map((x) => contentIDs[x])
    );

    if (contentIDs.length > newOrder.length) {
    } else {
      setOrder(newOrder);
    }
  };

  useEffect(() => {
    setContentObj(contentObject);
    if (Object.keys(contentObject).length <= contentOrder.length) {
      setIDs(Object.keys(contentObject).map((id) => id));
      setOrder(Object.keys(contentObject).map((_, i) => i));
    }
  }, [contentObject]);

  return (
    <SetStack
      setContentObject={setContentObj}
      contentObject={contentObj}
      contentStack={contentIDs}
      listOrder={contentOrder}
      id={"contentIDs"}
      update={update}
    />
  );
};
