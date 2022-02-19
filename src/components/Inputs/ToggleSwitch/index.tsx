import React from "react";
// import "./ToggleSwitch.scss";

export interface ToggleSwitchProps {
  id: string;
  label?: string;

  value: boolean;
  onChange: any;

  round?: boolean;
  color?: string;
}

const ToggleSwitch = ({ round = true, ...props }: ToggleSwitchProps) => {
  const { id, label, value, onChange } = props;

  return (
    <div className="inputContainer2Wide">
      {label ? (
        <label className={"attributeLabel"}>
          <span style={{ margin: "auto" }}>{label || id}</span>
        </label>
      ) : null}
      <label className="switch">
        <input type="checkbox" checked={value} onChange={onChange} id={id} />
        <span className={`switchspan ${round ? "round" : ""}`}></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
