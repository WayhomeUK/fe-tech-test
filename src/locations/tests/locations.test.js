import React from "react";
import { render, screen } from "@testing-library/react";

import { Locations } from "../locations";

describe("<Location/>", () => {
  it("should show title header", () => {
    render(<Locations />);

    expect(screen.getByText("Locations")).toBeVisible();
  });
});
