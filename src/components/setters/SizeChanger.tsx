import { useRecoilValue, useRecoilState } from "recoil";
import { selectedContentIDAtom, contentObjectAtom } from "../../state/atoms";
import { NumberInput } from "../inputs";

const SizeChanger = () => {
  const selectedContentID = useRecoilValue(selectedContentIDAtom);
  const [contentObject, updateContent] = useRecoilState(contentObjectAtom);

  if (selectedContentID === "") return null;

  const selectedContent = contentObject.contentObject[selectedContentID];
  const contentType = selectedContentID?.split("_")[0];

  const { relatives, props } = selectedContent;
  const { rotation } = props;
  const { r_x, r_y, r_width, r_height } = relatives;

  const handlePropChange = (newVal: number, label: string) => {
    const { props } = selectedContent;

    updateContent({
      ...contentObject,
      contentObject: {
        ...contentObject.contentObject,
        [selectedContentID]: {
          ...selectedContent,
          props: { ...props, [label]: Number(newVal) },
        },
      },
    });
  };

  const handleRelativeChange = (newVal: number, label: string) => {
    const { relatives } = selectedContent;

    updateContent({
      ...contentObject,
      contentObject: {
        ...contentObject.contentObject,
        [selectedContentID]: {
          ...selectedContent,
          relatives: { ...relatives, [label]: Number(newVal) },
        },
      },
    });
  };

  const SetPosition = (
    <>
      <NumberInput
        id={"r_x"}
        label={"r_x"}
        value={Math.round((r_x - 0.5) * 100)}
        onChange={(e: { target: { value: any } }) => {
          let scaledValue = e.target.value;
          let val = scaledValue / 100 + 0.5;
          handleRelativeChange(val, "r_x");
        }}
        min={-100}
        max={100}
        step={1}
      />
      <NumberInput
        id={"r_y"}
        label={"r_y"}
        value={Math.round((r_y - 0.5) * 100)}
        onChange={(e: { target: { value: any } }) => {
          let scaledValue = e.target.value;
          let val = scaledValue / 100 + 0.5;
          handleRelativeChange(val, "r_y");
        }}
        min={-100}
        max={100}
        step={1}
      />
    </>
  );

  const SetSize = (
    <>
      <NumberInput
        id={"r_width"}
        label={"r_width"}
        value={Math.round(r_width * 100)}
        onChange={(e: { target: { value: any } }) => {
          let scaledValue = e.target.value;
          let val = scaledValue / 100;
          handleRelativeChange(val, "r_width");
        }}
        min={0}
        max={200}
        step={1}
      />
      <NumberInput
        id={"r_height"}
        label={"r_height"}
        value={Math.round(r_height * 100)}
        onChange={(e: { target: { value: any } }) => {
          let scaledValue = e.target.value;
          let val = scaledValue / 100;
          handleRelativeChange(val, "r_height");
        }}
        min={0}
        max={200}
        step={1}
      />
    </>
  );

  const SetRotation = (
    <NumberInput
      id={"rotation"}
      value={rotation}
      onChange={(e: { target: { value: any } }) =>
        handlePropChange(e.target.value, "rotation")
      }
      min={-180}
      max={180}
      step={1}
    />
  );

  switch (contentType) {
    case "eye": {
      const {
        props: {
          w2h,
          innerRotation,
          outerRotation,
          sensitivity,
          movementFactor,
        },
        relatives: { r_outerSize, r_outer2inner, r_x, r_y },
        // relatives: { innerSize, outerSize },
      } = selectedContent;

      return (
        <>
          <NumberInput
            id={"w2h"}
            label={"w2h"}
            value={w2h}
            onChange={(e: { target: { value: any } }) =>
              handlePropChange(e.target.value, "w2h")
            }
            min={0.5}
            max={2}
            step={0.1}
          />
          <NumberInput
            id={"sensitivity"}
            label={"sensitivity"}
            value={sensitivity}
            onChange={(e: { target: { value: any } }) =>
              handlePropChange(e.target.value, "sensitivity")
            }
            min={0}
            max={2}
            step={0.25}
          />
          <NumberInput
            id={"movementFactor"}
            label={"movementFactor"}
            value={movementFactor}
            onChange={(e: { target: { value: any } }) =>
              handlePropChange(e.target.value, "movementFactor")
            }
            min={0}
            max={2}
            step={0.25}
          />
          <NumberInput
            id={"r_outerSize"}
            label={"r_outerSize"}
            value={r_outerSize}
            onChange={(e: { target: { value: any } }) =>
              handleRelativeChange(e.target.value, "r_outerSize")
            }
            min={0.01}
            max={0.5}
            step={0.01}
          />
          <NumberInput
            id={"r_outer2inner"}
            label={"r_outer2inner"}
            value={r_outer2inner}
            onChange={(e: { target: { value: any } }) =>
              handleRelativeChange(e.target.value, "r_outer2inner")
            }
            min={0.0}
            max={1}
            step={0.05}
          />
          {SetPosition}
          <NumberInput
            id={"innerRotation"}
            label={"innerRotation"}
            value={innerRotation}
            onChange={(e: { target: { value: any } }) =>
              handlePropChange(e.target.value, "innerRotation")
            }
            min={-180}
            max={180}
            step={1}
          />
          <NumberInput
            id={"outerRotation"}
            label={"outerRotation"}
            value={outerRotation}
            onChange={(e: { target: { value: any } }) =>
              handlePropChange(e.target.value, "outerRotation")
            }
            min={-180}
            max={180}
            step={1}
          />
        </>
      );
    }

    case "rect": {
      const {
        props: { fill, stroke },
        relatives: { r_x, r_y, r_width, r_height },
      } = selectedContent;

      return (
        <>
          {SetPosition}
          {SetSize}
          {SetRotation}
        </>
      );
    }

    case "image": {
      const {
        props: { fill, stroke },
        relatives: { r_x, r_y, r_width, r_height },
      } = selectedContent;

      return (
        <>
          {SetPosition}
          {SetSize}
          {SetRotation}
        </>
      );
    }

    default:
      return null;
  }
};

export default SizeChanger;
