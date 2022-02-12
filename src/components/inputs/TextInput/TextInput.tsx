import React from "react";

export interface TextInputProps {
  id: string;
  label: string;

  value: string;
  onChange: any;
}

const TextInput = (props: TextInputProps) => {
  const { id, label, value, onChange } = props;

  //   const [text, set] = useRecoilState(memeTextAtom);

  return (
    <div className="inputContainer2Wide">
      <label className={"attributeLabel"}>
        <span style={{ margin: "auto" }}>{label}</span>
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        className={"attributeInput"}
      />
    </div>
  );
};

export default TextInput;
