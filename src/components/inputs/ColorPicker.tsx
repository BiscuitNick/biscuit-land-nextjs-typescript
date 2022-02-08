export interface ColorPickerProps {
  label: string;
  value: string;
  onChange: any; //TODO cleanup onChange Type
}

const ColorPicker = (props: ColorPickerProps) => {
  const { label, value, onChange } = props;

  return (
    <div
      style={
        {
          // gridColumn: "1/3",
          // display: "grid",
          // gridTemplateColumns: "1fr 1fr 1fr",
        }
      }
    >
      <label className={"attributeLabel"}>
        <span style={{ margin: "auto" }}>{label}</span>
      </label>

      {/* <ToggleSwitch onChange={onToggle} value={toggleValue} /> */}

      <input
        // disabled={!toggleValue}
        type="color"
        value={value}
        onChange={onChange}
        className={"attributeInput"}
      />
    </div>
  );
};

export default ColorPicker;
