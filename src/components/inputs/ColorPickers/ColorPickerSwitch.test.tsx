import React from "react";
import { render } from "@testing-library/react";
import ColorPickerSwitch from "./";

describe("ColorPickerSwitch", () => {
  test("Renders ColorPickerSwitch", () => {
    render(
      <ColorPickerSwitch
        id={"ColorPickerSwitch"}
        value={"#00ff00"}
        toggleId={"TogleId"}
        toggleValue={true}
        onChange={(e: { target: { value: any } }) =>
          console.log(!e.target.value)
        }
        onToggle={(e: { target: { value: any } }) =>
          console.log(!e.target.value)
        }
      />
    );
  });
});
