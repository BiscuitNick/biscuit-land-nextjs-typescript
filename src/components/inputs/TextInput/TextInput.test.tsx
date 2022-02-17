import React from "react";
import { render, screen } from "@testing-library/react";
import TextInput from "./";

describe("TextInput", () => {
  test("Renders TogleSwitch", () => {
    render(
      <TextInput
        id="TextInputId"
        value={"some text"}
        onChange={(e: { target: { value: any } }) =>
          console.log(!e.target.value)
        }
      />
    );
    // screen.debug();
  });
});
