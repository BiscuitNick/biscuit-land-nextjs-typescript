// __tests__/index.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
//import {} from "@testing-library/react-hooks/dom";
import TestRenderer from "react-test-renderer";

import { renderHook, act } from "@testing-library/react-hooks";
import BiscuitIndex from "../pages/index";

describe("Render <BiscuitIndex/>", () => {
  it("renders <BiscuitIndex/>", () => {
    renderHook(<BiscuitIndex />);
  });
});

// describe("Render Header", () => {
//   it("renders Header", () => {
//     const RenderedBiscuit = render(<BiscuitIndex contentIDs={["one"]} />);
//     expect(screen.getByRole("presentation"));
//   });
// });

// const testRenderer = TestRenderer.create(<BiscuitIndex />);
// console.log(testRenderer.toJSON());
