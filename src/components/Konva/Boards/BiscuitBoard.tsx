import { useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { contentObjectAtom, selectedContentIDAtom } from "../../../state/atoms";

import { useWindowSize } from "../../../hooks/";

import { Board, Biscuit } from "../..";

export interface biscuitParams {
  width?: number;
  height?: number;
  buildParams: {
    contentObject: {
      [key: string]: { props: object; relatives: object; config?: object };
    };
    contentIDs: string[];
  };
}

const Konva = require("konva");
Konva.showWarnings = false;

const BiscuitBoard = (props: biscuitParams) => {
  const { buildParams: initParams } = props;

  const { width, height } = useWindowSize();
  const canvasRef = useRef<any>(null);
  const dragItem = useRef<any>(null);

  const [buildParams, setObject] = useRecoilState(contentObjectAtom);
  const setSelectedID = useSetRecoilState(selectedContentIDAtom);

  const squareWH = Math.min(width, height);

  useEffect(() => {
    setObject(initParams);
  }, [initParams]);

  const handleClick = (e: { target: { attrs: any } }) => {
    const attrs = e.target.attrs;
    const { id } = attrs;

    console.log(attrs);

    setSelectedID(id || "");
  };

  const handleDrag = (e: { target: { attrs: any } }) => {
    const attrs = e.target.attrs;
    const { id, x, y, box } = attrs;

    setSelectedID(id);

    if (dragItem.current != id) {
      dragItem.current = id;
    } else {
      dragItem.current = "";

      const contentItem = buildParams.contentObject[id];
      const { relatives } = contentItem;

      let newR_X = x / box.width; //squareWH;
      let newR_Y = y / box.height; //squareWH;

      setObject({
        ...buildParams,
        contentObject: {
          ...buildParams.contentObject,
          [id]: {
            ...contentItem,
            relatives: { ...relatives, r_x: newR_X, r_y: newR_Y },
          },
        },
      });
    }
  };

  return (
    <>
      <Board width={width} height={height} canvasRef={canvasRef}>
        {/* <Group {...centerBox}>{myContent}</Group> */}
        <Biscuit
          box={{ width: width, height: height }}
          contentObject={buildParams.contentObject}
          contentIDs={buildParams.contentIDs || []}
          canvasRef={canvasRef}
          handleClick={handleClick}
          handleDrag={handleDrag}
          key={"b1"}
          id={"b1"}
        />
        {/* <Biscuit
          box={{
            width: width / 2,
            height: height / 2,
            x: width / 2,
            y: height / 2,
          }}
          contentObject={buildParams.contentObject}
          contentIDs={buildParams.contentIDs || []}
          canvasRef={canvasRef}
          handleClick={handleClick}
          handleDrag={handleDrag}
          key={"b2"}
          id={"b2"}
        /> */}
      </Board>
    </>
  );
};

export default BiscuitBoard;
