// __tests__/index.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import BiscuitIndex from "../pages/index";

describe("Render <BiscuitIndex/>", () => {
  it("renders <BiscuitIndex/>", () => {
    renderHook(<BiscuitIndex />);
  });
});

// describe("Render <BiscuitIndex/>", () => {
//   it("render <BiscuitIndex/>", () => {
//     render(<BiscuitIndex />);
//   });
// });

// describe("Render Header", () => {w
//   it("renders Header", () => {
//     const RenderedBiscuit = render(<BiscuitIndex />);
//     expect(screen.getByRole("presentation"));
//   });
// });

// const testRenderer = TestRenderer.create(<BiscuitIndex />);
// console.log(testRenderer.toJSON());
