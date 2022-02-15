import { useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { contentObjectAtom, selectedContentIDAtom } from "../../../state/atoms";

import { Group } from "react-konva";
import { Board, Eye, MyRect, MyImage } from ".."; // "@biscuitnick/biscuit-library";
import {
  buildEyeProps,
  buildRectProps,
  buildImageProps,
} from "../../../lib/builders";

import useWindowSize from "../../../hooks/useWindowSize";
import { useStagePositions } from "../../../hooks/useStagePositions";

import Editor from "../../Editor";
import { getInnerPosition } from "../../../utils";

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

  const focalPoint = useStagePositions({ canvasRef });
  const [buildParams, setObject] = useRecoilState(contentObjectAtom);
  const setSelectedID = useSetRecoilState(selectedContentIDAtom);

  const squareWH = Math.min(width, height);

  const centerBox = {
    x: (width - squareWH) / 2,
    y: (height - squareWH) / 2,
  };

  useEffect(() => {
    setObject(initParams);
  }, [initParams]);

  const handleClick = (id: string) => {
    setSelectedID(id);
    let content = buildParams.contentObject[id];
    console.log(content);
  };

  const handleDrag = (id: string, e: { target: { attrs: any } }) => {
    const { x, y } = e.target.attrs;

    setSelectedID(id);

    if (dragItem.current != id) {
      dragItem.current = id;
    } else {
      dragItem.current = "";

      const contentItem = buildParams.contentObject[id];
      const { relatives } = contentItem;

      let newR_X = x / squareWH;
      let newR_Y = y / squareWH;

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

  const BiscuitContent = (
    params: {
      contentIDs: string[];
      contentObject: { [key: string]: { props: object; relatives: object } };
    },
    absolutes: { width: number; height: number }
  ) => {
    if (!params) return null;
    else {
      if (!params.contentIDs) return null;
      const { contentIDs, contentObject } = params;
      const content = contentIDs.map((id) => {
        let contentType = id?.split("_")[0];
        const data = contentObject[id];

        switch (contentType) {
          case "eye":
            let eyeprops = buildEyeProps({
              ...data,
              absolutes, //{ width: squareWH, height: squareWH },
            });

            let innerXY = getInnerPosition({
              ...eyeprops,
              focalPoint: {
                x: focalPoint.x - centerBox.x,
                y: focalPoint.y - centerBox.y,
              },
            });

            return (
              <Eye
                key={id}
                {...eyeprops}
                innerXY={innerXY}
                handleDrag={(e: any) => handleDrag(id, e)}
                handleClick={() => handleClick(id)}
              />
            );
          case "rect":
            let rectProps = buildRectProps({
              ...data,
              absolutes,
            });

            return (
              <MyRect
                handleDrag={(e: any) => handleDrag(id, e)}
                key={id}
                {...rectProps}
                handleClick={() => handleClick(id)}
              />
            );
          case "image":
            let imageProps = buildImageProps({
              ...data,
              absolutes,
            });

            return (
              <MyImage
                handleDrag={(e: any) => handleDrag(id, e)}
                key={id}
                id={id}
                {...imageProps}
                handleClick={() => handleClick(id)}
              />
            );
        }
      });
      return content;
    }
  };

  const myContent = BiscuitContent(buildParams, {
    width: squareWH,
    height: squareWH,
  });

  return (
    <>
      <Board width={width} height={height} canvasRef={canvasRef}>
        <Group {...centerBox}>{myContent}</Group>
      </Board>
      <div style={{ position: "absolute", left: 0, top: 0 }}>
        <Editor />
      </div>
    </>
  );
};

export default BiscuitBoard;
