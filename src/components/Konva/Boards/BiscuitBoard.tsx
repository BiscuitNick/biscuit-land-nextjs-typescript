// import React from "react";

import React, { useEffect, useRef, useState } from "react";
// import { useWindowSize } from "@biscuitnick/biscuit-library";

import { useWindowSize } from "../../../hooks";
import Board from "./Board";
import Biscuit from "../Content/Biscuit";
import BiscuitEditor from "../../Editors/BiscuitEditor";
import ContextBar from "../../Containers/ContextBar";
import IconButton from "../../Inputs/Buttons/IconButton";
import saveToCloud from "../../../api/saveToCloud";
export interface BiscuitProps {
  width?: number;
  height?: number;
  contentIDs: string[];
  contentObject: {
    [key: string]: any;
  };
}

const Konva = require("konva");
Konva.showWarnings = false;

const BiscuitBoard = (props: BiscuitProps) => {
  const [show, toggle] = useState(false);
  const { contentIDs: initIDs, contentObject: initContentObject } = props;

  const { width, height } = useWindowSize();
  const canvasRef = useRef<any>(null);
  const dragItem = useRef<any>(null);

  const [selectedID, setSelectedID] = useState("");
  const [contentIDs, setContentIDs] = useState(initIDs);
  const [contentOrder, setOrder] = useState(initIDs.map((id, i) => i));
  const [contentObject, setContentObject] = useState(initContentObject);
  const [changeLog, setChangeLog] = useState<any>([]);

  // const contentItem = contentObject[selectedID];
  // const squareWH = Math.min(width, height);

  const handleClick = (e: { target: { attrs: any } }) => {
    const attrs = e.target.attrs;
    const { contentID } = attrs;

    // console.log(contentID);

    setSelectedID(contentID || "");
  };

  const handleDrag = (e: { target: { attrs: any } }) => {
    const attrs = e.target.attrs;
    const { contentID, x, y, box } = attrs;

    setSelectedID(contentID);

    if (dragItem.current != contentID) {
      dragItem.current = contentID;
    } else {
      dragItem.current = "";

      const contentItem = contentObject[contentID];

      let newR_X = x / box.width; //squareWH;
      let newR_Y = y / box.height; //squareWH;

      let timeStamp = new Date().getTime();
      let lastTime = changeLog[changeLog.length - 1]?.timeStamp || 0;
      let diff = timeStamp - lastTime;
      if (diff > 1000) {
        setChangeLog([
          ...changeLog,
          {
            contentID,
            attr: "r_x",
            r_x: newR_X,
            r_y: newR_Y,
            method: "drag",
            timeStamp,
          },
        ]);
      } else {
        let copyLog = [...changeLog];
        copyLog[copyLog.length - 1] = {
          contentID,
          attr: "r_x",
          r_x: newR_X,
          r_y: newR_Y,
          method: "drag",
          timeStamp,
        };
        setChangeLog(copyLog);
      }

      setContentObject({
        ...contentObject,
        [contentID]: {
          ...contentItem,
          r_x: newR_X,
          r_y: newR_Y,
        },
      });
    }
  };

  const updateChangeLog = (attr: string, value: any, method = "input") => {
    let timeStamp = new Date().getTime();

    let lastChange = changeLog.length
      ? changeLog[changeLog.length - 1]
      : { timeStamp: 0, attr: null, id: null };
    let { timeStamp: lastTime, attr: lastAttr, id: lastID } = lastChange;

    let diff = timeStamp - lastTime;
    if (diff > 1000 || attr !== lastAttr || selectedID !== lastID) {
      setChangeLog([
        ...changeLog,
        {
          contentID: selectedID,
          attr,
          [attr]: value,
          method,
          timeStamp,
        },
      ]);
    } else {
      let copyLog = [...changeLog];
      copyLog[copyLog.length - 1] = {
        contentID: selectedID,
        attr,
        [attr]: value,
        method,
        timeStamp,
      };
      setChangeLog(copyLog);
    }
  };

  const update = (newOrder: number[], stack: string[]) => {
    if (contentIDs.length > newOrder.length) {
      // setOrder(myOrder);
    } else {
      setOrder(newOrder);
    }
  };

  useEffect(() => {}, [changeLog.length]);

  return (
    <>
      <Board width={width} height={height} canvasRef={canvasRef}>
        <Biscuit
          box={{ width, height }}
          contentObject={contentObject}
          contentIDs={contentOrder.map((n) => contentIDs[n])}
          canvasRef={canvasRef}
          handleClick={handleClick}
          handleDrag={handleDrag}
          key={"b1"}
          id={"b1"}
        />
      </Board>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 400,
          maxHeight: height,
          overflow: "auto",
        }}
      >
        <BiscuitEditor
          {...{
            selectedID,
            contentObject,
            setContentObject,
            updateChangeLog,
            show,
            contentIDs,
            contentOrder,
            update,
          }}
        />

        <ContextBar show={true}>
          <IconButton
            icon={"layers"}
            handleClick={() => {
              setSelectedID("");
              toggle(!show);
            }}
            size={"large"}
          />

          <IconButton
            icon={selectedID.split("_")[0]}
            handleClick={() => toggle(!show)}
            size={"large"}
          />

          <IconButton
            icon={"close"}
            handleClick={() => {
              toggle(false);
              setSelectedID("");
            }}
            size={"large"}
          />

          {/* <IconButton
            icon={"save"}
            handleClick={() =>
              saveToCloud({
                contentIDs,
                contentObject,
                biscuitID: "test-" + Math.floor(Math.random() * 100),
              })
            }
            size={"large"}
          /> */}
        </ContextBar>
      </div>
    </>
  );
};

export default BiscuitBoard;
