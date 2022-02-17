import React from "react";
import { render } from "@testing-library/react";
import ToggleSwitch from "./ToggleSwitch";

describe("ToggleSwitch", () => {
  test("Renders TogleSwitch", () => {
    render(
      <ToggleSwitch
        id="ToggleSwitchId"
        value={true}
        onChange={(e: { target: { value: any } }) =>
          console.log(!e.target.value)
        }
      />
    );
  });
});
