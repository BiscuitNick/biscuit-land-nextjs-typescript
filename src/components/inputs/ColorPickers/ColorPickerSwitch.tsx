import React from "react";
// import "./ColorPickers.css";

export interface ColorPickerSwitchProps {
  id: string;
  label?: string;
  value: string;
  onChange: any;
  toggleId: string;
  onToggle: any;
  toggleValue: boolean;
}

const ColorPickerSwitch = (props: ColorPickerSwitchProps) => {
  const { label, value, onChange, onToggle, toggleValue, id, toggleId } = props;

  return (
    <div className={"inputContainer3Wide"}>
      <label className={"attributeLabel"}>
        <span style={{ margin: "auto" }}>{label || id}</span>
      </label>
      <label className="switch">
        <input
          type="checkbox"
          checked={toggleValue}
          onChange={onToggle}
          id={toggleId}
        />
        <span className="switchspan round"></span>
      </label>
      <input
        id={id}
        disabled={!toggleValue}
        type="color"
        value={value}
        onChange={onChange}
        className={"attributeInput"}
      />
    </div>
  );
};

export default ColorPickerSwitch;
