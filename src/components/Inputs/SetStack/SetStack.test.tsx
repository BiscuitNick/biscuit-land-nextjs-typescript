import React from "react";
import { render } from "@testing-library/react";
import SetStack from ".";

const contentObject = {
  one: { name: "one", stroke: "#00ff00" },
  two: { name: "TWO", stroke: "#ff00ff" },
  three: { name: "one", stroke: "#00ff00" },
  four: { name: "TWO", stroke: "#ff00ff" },
};

describe("SetStack", () => {
  test("Renders SetOrder", () => {
    render(
      <SetStack
        contentStack={["one", "two", "three"]}
        contentObject={contentObject}
        listOrder={[0, 1, 2]}
        update={(a, b) => console.log(a, b)}
        id={"test order"}
        setContentObject={() => console.log()}
      />
    );
  });
});
