import React from "react";
import { render } from "@testing-library/react";
import NumberInput from "./NumberInput";

describe("NumberInput", () => {
  test("Renders NumberInput", () => {
    render(
      <NumberInput
        id="NumberInput"
        value={50}
        onChange={(e: { target: { value: any } }) =>
          console.log(!e.target.value)
        }
        min={0}
        max={100}
        step={1}
      />
    );
  });
});
