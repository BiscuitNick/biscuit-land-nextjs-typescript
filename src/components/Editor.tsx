import { useRecoilValue, useRecoilState } from "recoil";
import { selectedContentIDAtom, contentObjectAtom } from "../state/atoms";
import { ColorPicker } from "./inputs";

const ColorChanger = () => {
  const selectedContentID = useRecoilValue(selectedContentIDAtom);
  const [contentObject, updateContent] = useRecoilState(contentObjectAtom);

  if (selectedContentID === "") return null;

  const selectedContent = contentObject.contentObject[selectedContentID];

  const contentType = selectedContentID?.split("_")[0];

  console.log(contentType, selectedContentID);

  const handleChange = (newVal: any, label: string) => {
    //let newVal = e.target.value;
    console.log(newVal, label);
    const { props } = selectedContent;
    const { draggable } = props;

    updateContent({
      ...contentObject,
      contentObject: {
        ...contentObject.contentObject,
        [selectedContentID]: {
          ...selectedContent,
          props: { ...props, [label]: newVal, draggable: false },
        },
      },
    });
  };

  switch (contentType) {
    case "eye":
      const {
        props: { innerFill },
      } = selectedContent;

      return (
        <ColorPicker
          label={"innerFill"}
          value={innerFill}
          onChange={(e: { target: { value: any } }) =>
            handleChange(e.target.value, "innerFill")
          }
        />
      );

    case "rect":
      const {
        props: { fill },
      } = selectedContent;

      return (
        <ColorPicker
          label={"fill"}
          value={fill}
          onChange={(e: { target: { value: any } }) =>
            handleChange(e.target.value, "fill")
          }
        />
      );
    default:
      return null;
  }
};

export default ColorChanger;
