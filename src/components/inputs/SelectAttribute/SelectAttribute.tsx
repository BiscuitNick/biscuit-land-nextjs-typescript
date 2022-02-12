import React from "react";

export interface SelectAttributeProps {
  id: string;
  label?: string;
  value: string;
  items: string[];

  onChange: any;
}

export const SelectAttribute = (props: SelectAttributeProps) => {
  const { id, label, value, items, onChange } = props;

  return (
    <div className={"inputContainer2Wide"}>
      <label className="attributeLabel">
        <span style={{ margin: "auto" }}>{label || id}</span>
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={"attributeInput"}
      >
        {items.map((x) => (
          <option value={x} key={x}>
            {x}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectAttribute;
