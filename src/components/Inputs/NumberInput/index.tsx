import React, { useRef } from "react";
// import "./NumberInput.css";

export interface NumberInputProps {
  id: string;
  label?: string;
  value: number;
  onChange: any; //TODO cleanup onChange Type

  min?: number;
  max?: number;
  step?: number;

  buttonChange?: number;

  //TODO
  //   onToggle?: any; //
  //   toggleValue?: boolean;
}

const NumberInput = (props: NumberInputProps) => {
  const { id, label, value, onChange: handleChange, min, max, step } = props;

  const inputRef = useRef(value);

  return (
    <div className={"inputContainer2Wide"}>
      <label className={"attributeLabel"}>
        <span style={{ margin: "auto" }}>{label || id}</span>
      </label>
      <label className={"attributeLabel"}>
        <span style={{ margin: "auto" }}>{value}</span>
      </label>

      <input
        id={id}
        className={"sliderInput"}
        type="range"
        min={min ? min : 0}
        max={max ? max : 100}
        step={step ? step : 1}
        value={value || 0}
        onChange={handleChange}
      />
    </div>
  );
};

export default NumberInput;
