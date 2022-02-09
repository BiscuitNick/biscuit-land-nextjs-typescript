import { eyeDefaults, imageDefaults, rectDefaults } from ".";

interface contentItemProps {
  contentID: string;
  props: {
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
  };
  relatives: {
    r_outerSize?: number;
    r_outer2inner?: number;
    r_x?: number;
    r_y?: number;
    r_width?: number;
    r_height?: number;
    r_radius?: number;
  };
}

const applyDefaults = (contentItem: contentItemProps) => {
  const { contentID, props, relatives } = contentItem;
  const itemType = contentID.split("_")[0];

  switch (itemType) {
    case "eye": {
      return {
        props: { ...eyeDefaults.props, ...props },
        relatives: { ...eyeDefaults.relatives, ...relatives },
      };
    }
    case "image": {
      return {
        props: { ...imageDefaults.props, ...props },
        relatives: { ...imageDefaults.relatives, ...relatives },
      };
    }
    case "rect": {
      return {
        props: { ...rectDefaults.props, ...props },
        relatives: { ...rectDefaults.relatives, ...relatives },
      };
    }

    default: {
      return null;
    }
  }
};

export default applyDefaults;
