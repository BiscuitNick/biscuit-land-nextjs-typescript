// __tests__/dice.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
//import {} from "@testing-library/react-hooks/dom";

import { renderHook, act } from "@testing-library/react-hooks";
import DicePage from "../pages/dice";

describe("Render <DicePage/>", () => {
  it("renders <DicePage/>", () => {
    renderHook(<DicePage />);
  });
});

// describe("Render <BiscuitIndex/>", () => {
//   it("render <BiscuitIndex/>", () => {
//     render(<BiscuitIndex />);
//   });
// });

// const testRenderer = TestRenderer.create(<BiscuitIndex />);
// console.log(testRenderer.toJSON());
