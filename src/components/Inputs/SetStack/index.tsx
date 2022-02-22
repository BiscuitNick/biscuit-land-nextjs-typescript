import React, { useRef, useEffect } from "react";
import { useDrag } from "react-use-gesture";
import { useSprings, animated } from "@react-spring/web";

import { clamp, swap } from "../../../lib/helpers";
import ImageIcon from "@mui/icons-material/Image";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RectangleIcon from "@mui/icons-material/Rectangle";
import CircleIcon from "@mui/icons-material/Circle";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ToggleSwitch from "../ToggleSwitch";

const Icons: any = {
  image: <ImageIcon />,
  text: <TextFieldsIcon />,
  eye: <VisibilityIcon />,
  rect: <RectangleIcon />,
  circle: <CircleIcon />,
};

// #fafa6e
// #d7f171
// #b5e877
// #95dd7d
// #77d183
// #5bc489
// #3fb78d
// #23aa8f
// #009c8f
// #008d8c
// #007f86
// #0b717e
// #1c6373
// #255566
// #2a4858

const backgrounds = [
  `linear-gradient(135deg, #f6d365 0%, #d7f171 100%)`,
  `linear-gradient(135deg, #d7f171 0%, #b5e877 100%)`,
  `linear-gradient(135deg, #b5e877 0%, #95dd7d 100%)`,
  `linear-gradient(135deg, #95dd7d 0%, #77d183 100%)`,
  `linear-gradient(135deg, #77d183 0%, #5bc489 100%)`,
  `linear-gradient(135deg, #5bc489 0%, #3fb78d 100%)`,
  `linear-gradient(135deg, #3fb78d 0%, #23aa8f 100%)`,
  `linear-gradient(135deg, #23aa8f 0%, #009c8f 100%)`,
  `linear-gradient(135deg, #009c8f 0%, #008d8c 100%)`,
  `linear-gradient(135deg, #008d8c 0%, #007f86 100%)`,
  `linear-gradient(135deg, #007f86 0%, #0b717e 100%)`,
  `linear-gradient(135deg, #0b717e 0%, #1c6373 100%)`,
  `linear-gradient(135deg, #1c6373 0%, #255566 100%)`,
  `linear-gradient(135deg, #255566 0%, #2a4858 100%)`,
];

// const backgrounds = [
//   `linear-gradient(135deg, #f6d365 0%, #fda085 100%)`,
//   `linear-gradient(135deg, #fda085 0%, #f093fb 100%)`,
//   `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`,
//   `linear-gradient(135deg, #f5576c 0%, #5ee7df 100%)`,
//   `linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)`,
//   `linear-gradient(135deg, #b490ca 0%, #c3cfe2 100%)`,
//   `linear-gradient(135deg, #5ee7df 0%, #fda085 100%)`,
//   `linear-gradient(135deg, #f5576c 0%, #fda085 100%)`,
//   `linear-gradient(135deg, #c3cfe2 0%, #f5576c 100%)`,
//   `linear-gradient(135deg, #fafa6e 0%, #d7f171 100%)`,
//   `linear-gradient(135deg, #d7f171 0%, #b5e877 100%)`,
//   `linear-gradient(135deg, #b5e877 0%, #95dd7d 100%)`,
// ];

export interface SetOrderProps {
  contentObject: any;
  contentStack: string[];
  listOrder: number[];
  id: string;
  update: (nums: number[], ids: string[]) => void;
  setContentObject: any; // () => void;
}

const SetStack = (props: SetOrderProps) => {
  const height = 80;
  const padding = 5;

  const {
    contentStack,
    listOrder,
    id,
    update,
    contentObject,
    setContentObject,
  } = props;

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
        // color: "#000000",
        // background: "#55555555",
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
            // background: "#000000",
            // color: "#ffffff",
            // borderColor: "#32CD32",
            // borderWidth: 5,
            immediate: (n) => n === "y" || n === "zIndex",
          }
        : {
            y: newOrder.indexOf(i) * height,
            scale: 1,
            zIndex: "0",
            immediate: false,
            // borderColor: "#000000",
            // borderWidth: 2,
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

  const handleToggle = () => {};

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

        if (!content) {
          return null;
        }

        const name =
          content?.name || content?.textContent || content?.src || id;

        const fill = content?.fill || "black";
        const stroke = content?.stroke || "white";

        const ContentIcon =
          contentType === "eye" ? (
            <VisibilityIcon
              style={{ color: content.outerFill || content.innerFill }}
            />
          ) : contentType === "image" ? (
            <img src={content?.src} style={{ width: "100%", height: "100%" }} />
          ) : contentType === "rect" ? (
            <RectangleIcon />
          ) : contentType === "text" ? (
            <TextFieldsIcon />
          ) : null;

        return (
          <animated.div
            style={{
              position: "absolute",
              ...springprops,
              background: backgrounds[i % backgrounds.length],
              width: "100%",
              height: height - padding,
              boxSizing: "border-box",
              borderRadius: 10,
              margin: "auto",
              userSelect: "none",
              borderStyle: "solid",

              display: "grid",
              gridTemplateColumns: "75px 50px 1fr 100px",

              opacity: content?.active ? 1 : 0.5,
            }}
            key={i}
          >
            <span
              style={{
                margin: "auto",
                width: "100%",
                height: "100%",
                textAlign: "center",
                display: "grid",
                cursor: "grab",
              }}
              {...bind(i)}
            >
              <DragIndicatorIcon
                fontSize={"medium"}
                style={{ margin: "auto" }}
              />
            </span>
            <span
              style={{
                margin: "auto",
                padding: 5,
                cursor: "pointer",
                color: fill,
                // background: stroke,
              }}
            >
              {ContentIcon}
            </span>
            <span
              style={{
                margin: "auto",
                width: "90%",
                marginLeft: 0,
                textAlign: "left",
                whiteSpace: "nowrap",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {name}
              {/* {name.length > 10 ? name.slice(0, 10) : name} */}
            </span>
            {/* <span style={{ margin: "auto" }}>{ContentIcon}</span> */}

            <ToggleSwitch
              id={"active"}
              value={content?.active}
              onChange={(e: { target: { checked: boolean } }) =>
                setContentObject({
                  ...contentObject,
                  [id]: { ...content, active: e.target.checked },
                })
              }
            />
          </animated.div>
        );
      })}
    </div>
  );
};

export default SetStack;
