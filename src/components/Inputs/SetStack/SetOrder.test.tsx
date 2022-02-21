import React from "react";
import { render } from "@testing-library/react";
import SetOrder from ".";

const contentObject = {
  one: { name: "one", stroke: "#00ff00" },
  two: { name: "TWO", stroke: "#ff00ff" },
  three: { name: "one", stroke: "#00ff00" },
  four: { name: "TWO", stroke: "#ff00ff" },
};

describe("SetOrder", () => {
  test("Renders SetOrder", () => {
    render(
      <SetOrder
        contentStack={["one", "two", "three"]}
        contentObject={contentObject}
        listOrder={[0, 1, 2]}
        update={(a, b) => console.log(a, b)}
        id={"test order"}
      />
    );
  });
});
