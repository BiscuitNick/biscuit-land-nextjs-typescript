// __tests__/index.test.jsx

import { render, screen } from "@testing-library/react";
import BiscuitIndex from "../pages/index";

describe("BiscuitIndex", () => {
  it("renders a heading", () => {
    render(<BiscuitIndex />);

    // const heading = screen.getByRole("heading", {
    //   name: /welcome to next\.js!/i,
    // });

    // expect(heading).toBeInTheDocument();
  });
});
