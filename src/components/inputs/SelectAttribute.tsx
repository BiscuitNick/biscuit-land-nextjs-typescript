export interface SelectAttributeProps {
  label: string;
  value: string;
  items: string[];

  onChange: any;
}

export const SelectAttribute = (props: SelectAttributeProps) => {
  const { label, value, items, onChange } = props;

  return (
    <div
      style={{
        gridColumn: "1/3",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      <label style={{ display: "grid" }}>
        <span style={{ margin: "auto" }}>{label}</span>
      </label>
      <select value={value} onChange={onChange}>
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
