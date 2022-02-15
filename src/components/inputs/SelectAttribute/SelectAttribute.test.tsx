import React from "react";
import { render } from "@testing-library/react";
import SelectAttribute from "./SelectAttribute";

describe("Select Attribute", () => {
  test("Renders SelectAttribute", () => {
    render(
      <SelectAttribute
        id="SelectAttribute"
        value={"Item 1"}
        onChange={(e: { target: { value: any } }) =>
          console.log(!e.target.value)
        }
        items={["Item 1", "Item 2"]}
      />
    );
  });
});
