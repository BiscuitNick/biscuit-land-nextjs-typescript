import React from "react";
import { render } from "@testing-library/react";
import ColorPicker from "./";

describe("ColorPicker", () => {
  test("Renders ColorPicker", () => {
    render(
      <ColorPicker
        id="ColorPicker"
        value={"#00ff00"}
        onChange={(e: { target: { value: any } }) =>
          console.log(!e.target.value)
        }
      />
    );
  });
});
