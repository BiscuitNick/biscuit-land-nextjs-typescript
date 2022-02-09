import { useRecoilValue, useRecoilState } from "recoil";
import { selectedContentIDAtom, contentObjectAtom } from "../../state/atoms";
import { SelectAttribute } from "../inputs";

const EyeShapper = () => {
  const selectedContentID = useRecoilValue(selectedContentIDAtom);
  const [contentObject, updateContent] = useRecoilState(contentObjectAtom);
  if (selectedContentID === "") return null;
  const selectedContent = contentObject.contentObject[selectedContentID];
  const contentType = selectedContentID?.split("_")[0];

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

  switch (contentType) {
    case "eye":
      const {
        props: { innerShape, outerShape },
      } = selectedContent;
      const items = ["Circle", "Rect"];

      return (
        <>
          <SelectAttribute
            label={"innerShape"}
            value={innerShape}
            items={items}
            onChange={(e: { target: { value: any } }) =>
              handleChange(e.target.value, "innerShape")
            }
          />
          <SelectAttribute
            label={"outerShape"}
            value={outerShape}
            items={items}
            onChange={(e: { target: { value: any } }) =>
              handleChange(e.target.value, "outerShape")
            }
          />
        </>
      );

    default:
      return null;
  }
};

export default EyeShapper;
