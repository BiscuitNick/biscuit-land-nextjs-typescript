import { ToggleSwitch } from "@biscuitnick/biscuit-library"; // "../inputs"; //

interface toggleSwitchesProps {
  selectedContentID: string;
  contentObject: {
    contentIDs: string[];
    [key: string]: any;
  };
  updateContent: Function;
  attributes: string[];
}

interface ToggleSwitches {
  [key: string]: any;
}

const ToggleSetters = (toggleProps: toggleSwitchesProps) => {
  const { selectedContentID, contentObject, updateContent, attributes } =
    toggleProps;
  if (selectedContentID === "") return null;

  const handleChange = (e: { target: { id: string; checked: boolean } }) => {
    const id = e.target.id;
    const value = e.target.checked;

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
  const { draggable, strokeEnabled, fillEnabled } = props;

  const ToggleSwitches: ToggleSwitches = {
    draggable: (
      <ToggleSwitch
        id={"draggable"}
        label={"draggable"}
        value={draggable}
        onChange={handleChange}
      />
    ),
    fillEnabled: (
      <ToggleSwitch
        id={"fillEnabled"}
        value={fillEnabled}
        onChange={handleChange}
      />
    ),
    strokeEnabled: (
      <ToggleSwitch
        id={"strokeEnabled"}
        value={strokeEnabled}
        onChange={handleChange}
      />
    ),
  };

  return (
    <>
      {attributes.map((attr: string) =>
        Object.keys(ToggleSwitches).includes(attr) ? ToggleSwitches[attr] : null
      )}
    </>
  );
};

export default ToggleSetters;
