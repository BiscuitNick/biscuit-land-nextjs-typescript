import { Group } from "react-konva";
import { Board, Eye, MyRect, getStageData } from "@biscuitnick/react-biscuit/";
import useWindowSize from "../hooks/useWindowSize";

import { useStagePositions } from "../hooks/useStagePositions";
import buildEyeProps from "../utils/buildEyeProps";
import { useRef } from "react";

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
  const { buildParams } = props;

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
      const { contentIDs, contentObject } = params;
      const content = contentIDs.map((id) => {
        const data = contentObject[id];
        if (id?.split("_")[0] === "eye") {
          let eyeprops = {
            ...buildEyeProps({
              ...data,
              absolutes: { width: squareWH, height: squareWH },
            }),
            focalPoint: {
              x: focalPoint.x - centerBox.x,
              y: focalPoint.y - centerBox.y,
            },
          };
          return <Eye {...eyeprops} />;
        }
      });
      return content;
    }
  };

  const myContent = BiscuitContent(buildParams);

  return (
    <Board width={width} height={height} canvasRef={canvasRef}>
      <Group {...centerBox}>{myContent}</Group>
    </Board>
  );
};

export default Biscuit;
