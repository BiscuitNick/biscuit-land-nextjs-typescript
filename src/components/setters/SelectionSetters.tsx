import React from "react";
import { SelectAttribute } from "../Inputs";

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
  const { innerShape, outerShape, fontStyle, fontFamily, align } = props;

  const shapes = ["Circle", "Rect"];
  const fontStyles = ["normal", "italic", "bold", "italic bold"];
  const fonts = [
    "Open Sans",
    "Roboto Condensed",
    "Roboto Mono",
    "Roboto",
    "Ubuntu",
    "Rubik",
    "Bebas Neue",
    "Lobster",
    "Lobster Two",
    "Comfortaa",
    "Staatliches",
    "Balsamiq Sans",
    "Alfa Slab One",
    "Righteous",
    "Fredoka One",
    "Concert One",
    "Luckiest Guy",
    "Poiret One",
    "Sigmar One",
    "Arima Madurai",
    "Bangers",
    "Playball",
    "Monoton",
    "Black Ops One",
    "Audiowide",
    "Gruppo",
    "Bubblegum Sans",
    "Chewy",
    "Fredericka the Great",
    "Cabin Sketch",
    "Bungee Inline",
    "Creepster",
    "Love Ya Like A Sister",
    "Wallpoet",
    "Bungee Shade",
    "Megrim",
    "Unkempt",
    "Codystar",
    "Kranky",
    "New Rocker",
    "Sarina",
    "Modak",
    "Barrio",
    "Tourney",
    "Kavoon",
  ];
  const alignments = ["left", "center", "right"];

  const SelectAttributes: SelectAttributes = {
    innerShape: (
      <SelectAttribute
        label={"innerShape"}
        id={"innerShape"}
        key={"innerShape"}
        value={innerShape}
        items={shapes}
        onChange={handleChange}
      />
    ),
    outerShape: (
      <SelectAttribute
        label={"outerShape"}
        id={"outerShape"}
        key={"outerShape"}
        value={outerShape}
        items={shapes}
        onChange={handleChange}
      />
    ),
    fontStyle: (
      <SelectAttribute
        label={"fontStyle"}
        id={"fontStyle"}
        key={"fontStyle"}
        value={fontStyle}
        items={fontStyles}
        onChange={handleChange}
      />
    ),
    fontFamily: (
      <SelectAttribute
        label={"fontFamily"}
        id={"fontFamily"}
        key={"fontFamily"}
        value={fontFamily}
        items={fonts}
        onChange={handleChange}
      />
    ),
    align: (
      <SelectAttribute
        label={"align"}
        id={"align"}
        key={"align"}
        value={align}
        items={alignments}
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
