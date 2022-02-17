import { eyeDefaults, imageDefaults, rectDefaults, textDefaults } from ".";

interface contentItemProps {
  contentID: string;
  fontStyle?: string;
  fontFamily?: string;

  focalPoint?: number;
  innerRotation?: number;
  outerRotation?: number;
  w2h?: number;
  sensitivity?: number;
  movementFactor?: number;
  innerShape?: string;
  outerShape?: string;
  innerFill?: string;
  outerFill?: string;
  innerStroke?: string;
  outerStroke?: string;
  disableClip?: boolean;
  rotation?: number;
  fill?: string;
  stroke?: string;
  draggable?: boolean;
  cornerRadius?: number;

  r_strokeWidth?: number;
  textContent?: string;
  minLines?: number;
  maxLines?: number;

  r_outerSize?: number;
  r_outer2inner?: number;
  r_x?: number;
  r_y?: number;
  r_width?: number;
  r_height?: number;
  r_radius?: number;
}

const applyDefaults = (contentItem: contentItemProps) => {
  const { contentID } = contentItem;
  const itemType = contentID.split("_")[0];

  switch (itemType) {
    case "eye": {
      return { ...eyeDefaults, ...contentItem };
    }
    case "image": {
      return { ...imageDefaults, ...contentItem };
    }
    case "rect": {
      return { ...rectDefaults, ...contentItem };
    }
    case "text": {
      return { ...textDefaults, ...contentItem };
    }
    default: {
      return null;
    }
  }
};

export default applyDefaults;
