import LayersIcon from "@mui/icons-material/Layers";
import ImageIcon from "@mui/icons-material/Image";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RectangleIcon from "@mui/icons-material/Rectangle";
import CircleIcon from "@mui/icons-material/Circle";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ToggleSwitch from "../ToggleSwitch";
import SaveIcon from "@mui/icons-material/Upload";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

export interface IconButton {
  size: string;
  handleClick: () => void;
  icon: string;
}

const IconButton = ({ size, icon = "Layers", handleClick }: IconButton) => {
  const Icons: any = {
    "": <EditIcon />,
    image: <ImageIcon />,
    text: <TextFieldsIcon />,
    eye: <VisibilityIcon />,
    rect: <RectangleIcon />,
    circle: <CircleIcon />,
    save: <SaveIcon />,
    layers: <LayersIcon />,
    close: <CloseIcon />,
  };

  return (
    <button onClick={handleClick} className="iconButton">
      {Icons[icon]}
    </button>
  );
};

export default IconButton;
