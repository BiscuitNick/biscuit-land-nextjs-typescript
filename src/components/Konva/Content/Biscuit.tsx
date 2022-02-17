import { Group } from "react-konva";
import { Eye, AnimatedRectangle, AnimatedImage, AnimatedText } from "..";
import getInnerPosition from "../../../utils/getInnerPosition";
import { useStagePositions } from "@biscuitnick/biscuit-library";
import {
  buildEyeProps,
  buildRectProps,
  buildImageProps,
  buildTextProps,
} from "../../../lib/builders";

export interface BiscuitProps {
  contentObject: { [key: string]: any };
  contentIDs: string[];

  box: { width: number; height: number; x?: number; y?: number };

  canvasRef: any;

  handleClick: any;
  handleDrag: any;
  id: string;
}

const Biscuit = (props: BiscuitProps) => {
  const {
    contentObject,
    contentIDs,
    box,
    canvasRef,
    handleClick,
    handleDrag,
    id,
  } = props;
  const focalPoint = useStagePositions({ canvasRef });

  const { width, height } = box;
  const squareWH = Math.min(width, height);
  const x = box.x || 0;
  const y = box.y || 0;
  const squareBox = { width: squareWH, height: squareWH };
  const centerBox = {
    x: (width - squareWH) / 2 + x,
    y: (height - squareWH) / 2 + y,
  };
  const BiscuitContent = contentIDs.map((id) => {
    let contentType = id?.split("_")[0];
    const data = contentObject[id];

    switch (contentType) {
      case "eye":
        let eyeprops = buildEyeProps({
          ...data,
          absolutes: squareBox,
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
            id={id}
            {...eyeprops}
            innerXY={innerXY}
            handleDrag={handleDrag}
            handleClick={handleClick}
          />
        );
      case "rect":
        let rectProps = buildRectProps({
          ...data,
          absolutes: squareBox, //{ width: squareWH, height: squareWH },
        });

        return (
          <AnimatedRectangle
            key={id}
            id={id}
            {...rectProps}
            handleDrag={handleDrag}
            handleClick={handleClick}
          />
        );
      case "image":
        let imageProps = buildImageProps({
          ...data,
          absolutes: squareBox, //{ width: squareWH, height: squareWH },
        });

        console.log(imageProps);

        return (
          <AnimatedImage
            key={id}
            id={id}
            {...imageProps}
            handleDrag={handleDrag}
            handleClick={handleClick}
          />
        );
      case "text":
        let textProps = buildTextProps({
          ...data,
          absolutes: squareBox,
        });

        return (
          <AnimatedText
            key={id}
            id={id}
            {...textProps}
            handleDrag={handleDrag}
            handleClick={handleClick}
            canvasRef={canvasRef}
          />
        );

      default:
        return null;
    }
  });
  return <Group {...centerBox}>{BiscuitContent}</Group>;
};

export default Biscuit;
