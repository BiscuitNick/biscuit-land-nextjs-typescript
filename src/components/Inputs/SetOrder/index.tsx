import React, { useRef, useEffect } from "react";
import { useDrag } from "react-use-gesture";
import { useSprings, animated } from "@react-spring/web";

import { clamp, swap } from "../../../lib/helpers";
import ImageIcon from "@mui/icons-material/Image";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RectangleIcon from "@mui/icons-material/Rectangle";
import CircleIcon from "@mui/icons-material/Circle";

const Icons = {
  image: <ImageIcon />,
  text: <TextFieldsIcon />,
  eye: <VisibilityIcon />,
  rect: <RectangleIcon />,
  circle: <CircleIcon />,
};

const backgrounds = [
  "#55555555",
  // `linear-gradient(135deg, #f6d365 0%, #fda085 100%)`,
  // `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`,
  // `linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)`,
  // `linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)`,
  // `linear-gradient(135deg, #5ee7df 0%, #fda085 100%)`,
];

export interface SetOrderProps {
  contentObject: any;
  contentStack: string[];
  listOrder: number[];
  id: string;
  update: (nums: number[], ids: string[]) => void;
}

const SetOrder = (props: SetOrderProps) => {
  const height = 80;
  const padding = 5;

  const { contentStack, listOrder, id, update, contentObject } = props;

  const order = useRef(listOrder);

  useEffect(() => {
    if (order) {
      if (order.current.length > listOrder.length) {
        order.current = [...order.current, listOrder.length - 1];
      }

      order.current = listOrder;
    }
  }, [contentStack, listOrder]); //contentIndex,

  const [springs, setSprings] = useSprings(
    contentStack.length || 0,
    (i) => {
      return {
        y: listOrder.indexOf(i) * height,
        scale: 1,
        zIndex: "0",
        color: "#000000",
        background: "#55555555",
      };
    },
    []
    // [contentIndex]
  );

  const bind = useDrag(({ args: [id], active, movement: [, y] }) => {
    if (!order.current) {
      return null;
    }
    const curIndex = order.current.indexOf(id);
    const rowTest = clamp(
      Math.round((curIndex * height + y) / height),
      0,
      contentStack.length - 1
    );
    const curRow = rowTest >= 0 ? rowTest : 0;

    if (curRow < 0 || curIndex < 0) {
      return null;
    }

    const newOrder = swap(order.current, curIndex, curRow);

    setSprings((i) => {
      return curIndex < 0 || curRow < 0
        ? {}
        : active && i === id
        ? {
            y: curIndex * height + y,
            scale: 1.1,
            zIndex: "1",
            background: "#000000",
            color: "#ffffff",
            immediate: (n) => n === "y" || n === "zIndex",
          }
        : {
            y: newOrder.indexOf(i) * height,
            scale: 1,
            zIndex: "0",
            immediate: false,
            background: "#55555555",
            color: "#000000",
          };
    });

    if (!active) {
      if (newOrder) {
        order.current = newOrder;
        update(newOrder, contentStack);
        // console.log("UPDATE()", newOrder, contentStack);
      } else {
        //BUG
      }
    }
    {
      useTouch: true;
    }
  });

  return (
    <div
      // className={Styles.touchdiv}
      style={{
        position: "relative",
        // gridColumn: "1/3",
        width: "90%",
        height: height * contentStack.length,
        padding: padding,
        boxSizing: "border-box",

        display: "grid",
        gridTemplateColumns: "1fr",

        userSelect: "none",
        margin: "auto",
      }}
    >
      {springs.map((springprops, i) => {
        const id = contentStack[i];
        const contentType = id.split("_")[0];

        const content = contentObject[id];
        const name = content.name || content.textContent || id;
        const color = content.stroke || "#000000";
        const background = content.fill || "#ffffff";
        const Icon = Icons[contentType];

        return (
          <animated.div
            {...bind(i)}
            className={"touchdiv"}
            style={{
              position: "absolute",
              // background: backgrounds[i % backgrounds.length],

              ...springprops,

              background,
              color,

              width: "100%",
              height: height - padding,
              boxSizing: "border-box",
              borderRadius: 10,
              margin: "auto",
              cursor: "grab",
              userSelect: "none",

              border: `3px solid ${color}`,

              display: "grid",
              // gridAutoFlow: "column",
              gridTemplateColumns: "1fr 1fr 1fr",
            }}
            key={i}
          >
            <span style={{ margin: "auto" }}>{Icon}</span>{" "}
            <span style={{ margin: "auto", marginLeft: 0, textAlign: "left" }}>
              {name.length > 10 ? name.slice(0, 10) + "..." : name}
            </span>
          </animated.div>
        );
      })}
    </div>
  );
};

export default SetOrder;
