import styled from "@emotion/styled";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import ImageIcon from "@mui/icons-material/Image";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RectangleIcon from "@mui/icons-material/Rectangle";
import CircleIcon from "@mui/icons-material/Circle";
import EditIcon from "@mui/icons-material/Edit";

export interface ContentDetails {
  contentType: "eye" | "rect" | "text" | "circle" | "image";
  name: string;
  text?: string;
  fill?: string;
  borderColor?: string;
  color?: string;
  width?: number;
  height?: number;
  bind?: any;
}

export interface StyleOverides {
  background?: string;
  borderColor?: string;
  color?: string;
  width?: number;
  height?: number;
  cursor?: string;
  fontSize?: number | string;
}

const Div = styled.div(
  `
  position:absolute;
  left:0;
  top:0;
background: #000000;
border-color: #000000;
border-width: 2px;
border-radius: 10px; 
border-style: solid;
box-sizing: border-box;
color:#ffffff;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
margin: auto;
user-select:none;
width:400px;
height:90px;
`,
  (props: StyleOverides) => ({
    background: props.background,
    borderColor: props.borderColor,
    width: props.width,
    height: props.height,
    fontSize: props.fontSize,
  })
);

const Span = styled.span(
  `margin:auto;
  color:white;
  
  `,
  (props: StyleOverides) => ({
    color: props.color,
    cursor: props.cursor,
    fontSize: props.fontSize,
  })
);

const ContentDetails = (props: ContentDetails) => {
  const {
    contentType,
    name,
    text,
    borderColor,
    color,
    fill,
    width,
    height,
    bind,
  } = props;
  const style: any = { backround: fill, borderColor, width, height };
  Object.keys(style).map((attr) => {
    if (style[attr] === null || style[attr] === undefined) {
      delete style[attr];
    }
  });

  const ContentIcon =
    contentType === "eye" ? (
      <VisibilityIcon />
    ) : contentType === "image" ? (
      <ImageIcon />
    ) : contentType === "rect" ? (
      <RectangleIcon />
    ) : contentType === "text" ? (
      <TextFieldsIcon />
    ) : null;

  return (
    <Div {...style}>
      <Span cursor={"grab"}>
        <DragIndicatorIcon fontSize={"medium"} />
      </Span>
      <Span fontSize={"medium"}>{ContentIcon}</Span>
      <Span color={"white"}>{name}</Span>
      <Span fontSize={"medium"} cursor={"pointer"} color={"white"}>
        <EditIcon fontSize={"medium"} />
      </Span>
    </Div>
  );
};

export default ContentDetails;
