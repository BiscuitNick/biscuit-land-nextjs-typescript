import { Group } from "react-konva";
import { Board, Eye, MyRect } from "@biscuitnick/react-biscuit/";
import useWindowSize from "../hooks/useWindowSize";

import { useStagePositions } from "../hooks/useStagePositions";
import buildEyeProps from "../utils/buildEyeProps";
import { useEffect, useRef } from "react";

import buildRectProps from "../utils/buildRectProps";

import { contentObjectAtom, selectedContentIDAtom } from "../state/atoms";
import { useRecoilValue, useRecoilState } from "recoil";

import ColorChanger from "./Editor";

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
  const { width, height } = useWindowSize();
  const { buildParams: initParams } = props;

  const [buildParams, setObject] = useRecoilState(contentObjectAtom);
  const [selectedContentID, setSelectedID] = useRecoilState(
    selectedContentIDAtom
  );

  console.log(buildParams);

  useEffect(() => {
    setObject(initParams);
  }, [initParams]);

  useEffect(() => {
    console.log(selectedContentID);
  }, [selectedContentID]);

  const handleClick = (id: string) => {
    // console.log(id);
    setSelectedID(id);
  };

  const canvasRef = useRef<any>(null);
  const focalPoint = useStagePositions({ canvasRef });

  const squareWH = Math.min(width, height);
  const centerBox = {
    x: (width - squareWH) / 2,
    y: (height - squareWH) / 2,
  };

  const BiscuitContent = (params: {
    contentIDs: string[];
    contentObject: { [key: string]: { props: object; relatives: object } };
  }) => {
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
                absolutes: { width: squareWH, height: squareWH },
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
              absolutes: { width: squareWH, height: squareWH },
            });

            return (
              <MyRect {...rectProps} handleClick={() => handleClick(id)} />
            );
        }
      });
      return content;
    }
  };

  const myContent = BiscuitContent(buildParams);

  return (
    <>
      <Board width={width} height={height} canvasRef={canvasRef}>
        <Group {...centerBox}>{myContent}</Group>
      </Board>
      <div style={{ position: "absolute", left: 0, top: 0 }}>
        <ColorChanger />
      </div>
    </>
  );
};

export default Biscuit;
