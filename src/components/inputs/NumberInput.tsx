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
  const { id, label, value, onChange, min, max, step } = props;

  return (
    <div
      style={{
        gridColumn: "1/3",
        display: "grid",
        gridTemplateColumns: "1fr 1fr ",
      }}
    >
      <label className={"attributeLabel"}>
        <span style={{ margin: "auto" }}>{label || id}</span>
      </label>
      <label className={"attributeLabel"}>
        <span style={{ margin: "auto" }}>{value}</span>
      </label>

      <input
        id={id}
        // className={"sliderInput"}
        type="range"
        min={min ? min : 0}
        max={max ? max : 100}
        step={step ? step : 1}
        value={value || 0}
        onChange={onChange}
      />
    </div>
  );
};

export default NumberInput;
