import { TextInput } from "@biscuitnick/biscuit-library";

interface textSetterProps {
  selectedContentID: string;
  contentObject: {
    contentIDs: string[];
    [key: string]: any;
  };
  updateContent: Function;
  attributes: string[];
}

interface TextInputAttributes {
  [key: string]: any;
}

const TextSetters = (textProps: textSetterProps) => {
  const { selectedContentID, contentObject, updateContent, attributes } =
    textProps;
  if (selectedContentID === "") return null;

  const selectedContent = contentObject.contentObject[selectedContentID];
  const { props } = selectedContent;
  const { src } = props;

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

  const TextInputAttributes: TextInputAttributes = {
    src: (
      <TextInput
        id="src"
        label="Image url"
        onChange={handleChange}
        value={src}
      />
    ),
  };

  return (
    <>
      {attributes.map((attr: string) =>
        Object.keys(TextInputAttributes).includes(attr)
          ? TextInputAttributes[attr]
          : null
      )}
    </>
  );
  // switch (contentType) {
  //   case "image":
  //     return (
  //       <TextInput
  //         id="src"
  //         label="Image url"
  //         onChange={handleChange}
  //         value={src}
  //       />
  //     );
  //   case "eye":
  //     return null;
  //   case "rect":
  //     return null;
  //   default:
  //     return null;
  // }
};

export default TextSetters;
