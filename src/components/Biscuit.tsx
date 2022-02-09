import { useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { contentObjectAtom, selectedContentIDAtom } from "../state/atoms";

import { Group, Text, Circle, Ellipse, Rect, Wedge } from "react-konva";
import { Board, Eye, MyRect, MyImage } from "@biscuitnick/react-biscuit/";
import {
  buildEyeProps,
  buildRectProps,
  buildImageProps,
} from "../lib/builders";

import useWindowSize from "../hooks/useWindowSize";
import { useStagePositions } from "../hooks/useStagePositions";

import Editor from "./Editor";

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

const Biscuit = (props: biscuitParams) => {
  const { buildParams: initParams } = props;

  const { width, height } = useWindowSize();
  const canvasRef = useRef<any>(null);
  const focalPoint = useStagePositions({ canvasRef });
  const [buildParams, setObject] = useRecoilState(contentObjectAtom);
  const setSelectedID = useSetRecoilState(selectedContentIDAtom);

  useEffect(() => {
    setObject(initParams);
  }, [initParams]);

  const handleClick = (id: string) => {
    setSelectedID(id);
    let content = buildParams.contentObject[id];
    console.log(content);
  };

  const squareWH = Math.min(width, height);
  const centerBox = {
    x: (width - squareWH) / 2,
    y: (height - squareWH) / 2,
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
            let eyeprops = {
              ...buildEyeProps({
                ...data,
                absolutes, //{ width: squareWH, height: squareWH },
              }),
              focalPoint: {
                x: focalPoint.x - centerBox.x,
                y: focalPoint.y - centerBox.y,
              },
              handleClick: () => handleClick(id),
            };
            return <Eye key={id} {...eyeprops} />;
          case "rect":
            let rectProps = buildRectProps({
              ...data,
              absolutes,
            });

            return (
              <MyRect
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
                key={id}
                {...imageProps}
                src={
                  "https://res.cloudinary.com/drk1nv578/image/upload/t_optimized/v1612050978/biscuitland/biscuitnoshadow_e49tg3.png"
                }
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
        <Group {...centerBox}>
          {myContent}

        </Group>
      </Board>
      <div style={{ position: "absolute", left: 0, top: 0 }}>
        <Editor />
      </div>
    </>
  );
};

export default Biscuit;


          // {
          //   /* <Circle
          //   fill={"#00ff00"}
          //   width={60}
          //   height={60}
          //   x={width / 2 - 60}
          //   y={height / 2}
          // /> */
          // }
          // {
          //   /* <Text text={"hello"} /> */
          // }
          // {
          //   /* <Wedge
          //   x={width / 2}
          //   y={height / 2}
          //   width={50}
          //   height={50}
          //   radius={30}
          //   fill={"red"}
          //   angle={350}
          //   rotation={0}
          // /> */
          // }
          // {
          //   /* <Ellipse
          //   radiusX={100 / 2}
          //   radiusY={200 / 2}
          //   x={width / 2}
          //   y={height / 2}
          //   fill={"#fff000"}
          // />
          // <Rect
          //   width={100 - 5}
          //   height={200}
          //   x={width / 2 - 100}
          //   y={height / 2 - 200}
          //   fill={"#00ff00"}
          //   draggable={true}
          // /> */
          // }

          // {
          //   /* <MyImage
          //   x={0}
          //   y={0}
          //   width={332}
          //   height={280}
          //   src={
          //     "https://res.cloudinary.com/drk1nv578/image/upload/t_optimized/v1612050978/biscuitland/biscuitnoshadow_e49tg3.png"
          //   }
          // /> */
          // }