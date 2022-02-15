import React from "react";
import { SelectAttribute } from "../inputs";

interface selectAttributeProps {
  selectedContentID: string;
  contentObject: {
    contentIDs: string[];
    [key: string]: any;
  };
  updateContent: Function;
  attributes: string[];
}

interface SelectAttributes {
  [key: string]: any;
}

const SelectionSetter = (selectionProps: selectAttributeProps) => {
  const { selectedContentID, contentObject, updateContent, attributes } =
    selectionProps;
  if (selectedContentID === "") return null;

  const handleChange = (e: { target: { id: string; value: string } }) => {
    const id = e.target.id;
    const value = e.target.value;

    const { props } = selectedContent;

    updateContent({
      ...contentObject,
      contentObject: {
        ...contentObject.contentObject,
        [selectedContentID]: {
          ...selectedContent,
          props: { ...props, [id]: value },
        },
      },
    });
  };
  const selectedContent = contentObject.contentObject[selectedContentID];
  const { props } = selectedContent;
  const { innerShape, outerShape } = props;

  const shapes = ["Circle", "Rect"];

  const SelectAttributes: SelectAttributes = {
    innerShape: (
      <SelectAttribute
        label={"innerShape"}
        id={"innerShape"}
        value={innerShape}
        items={shapes}
        onChange={handleChange}
      />
    ),
    outerShape: (
      <SelectAttribute
        label={"outerShape"}
        id={"outerShape"}
        value={outerShape}
        items={shapes}
        onChange={handleChange}
      />
    ),
  };

  return (
    <>
      {attributes.map((attr: string) =>
        Object.keys(SelectAttributes).includes(attr)
          ? SelectAttributes[attr]
          : null
      )}
    </>
  );
};

export default SelectionSetter;
