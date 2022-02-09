import { useRecoilValue, useRecoilState } from "recoil";
import { selectedContentIDAtom, contentObjectAtom } from "../../state/atoms";
import { ColorPicker } from "../inputs";

const ColorChanger = () => {
  const selectedContentID = useRecoilValue(selectedContentIDAtom);
  const [contentObject, updateContent] = useRecoilState(contentObjectAtom);

  if (selectedContentID === "") return null;

  const selectedContent = contentObject.contentObject[selectedContentID];
  const contentType = selectedContentID?.split("_")[0];
  const { props } = selectedContent;
  const { fill, stroke } = props;

  const handleChange = (newVal: any, label: string) => {
    const { props } = selectedContent;

    updateContent({
      ...contentObject,
      contentObject: {
        ...contentObject.contentObject,
        [selectedContentID]: {
          ...selectedContent,
          props: { ...props, [label]: newVal },
        },
      },
    });
  };

  const SetFill = (
    <ColorPicker
      label={"fill"}
      value={fill}
      onChange={(e: { target: { value: any } }) =>
        handleChange(e.target.value, "fill")
      }
    />
  );
  const SetStroke = (
    <ColorPicker
      label={"stroke"}
      value={stroke}
      onChange={(e: { target: { value: any } }) =>
        handleChange(e.target.value, "stroke")
      }
    />
  );

  switch (contentType) {
    case "eye":
      const {
        props: { innerFill, outerFill, innerStroke, outerStroke },
      } = selectedContent;

      return (
        <>
          <ColorPicker
            label={"innerFill"}
            value={innerFill}
            onChange={(e: { target: { value: any } }) =>
              handleChange(e.target.value, "innerFill")
            }
          />
          <ColorPicker
            label={"innerStroke"}
            value={innerStroke}
            onChange={(e: { target: { value: any } }) =>
              handleChange(e.target.value, "innerStroke")
            }
          />
          <ColorPicker
            label={"outerFill"}
            value={outerFill}
            onChange={(e: { target: { value: any } }) =>
              handleChange(e.target.value, "outerFill")
            }
          />
          <ColorPicker
            label={"outerStroke"}
            value={outerStroke}
            onChange={(e: { target: { value: any } }) =>
              handleChange(e.target.value, "outerStroke")
            }
          />
        </>
      );

    case "rect":
      return (
        <>
          {SetFill}
          {SetStroke}
        </>
      );
    default:
      return null;
  }
};

export default ColorChanger;
