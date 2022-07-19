import React from "react";
import { render, screen } from "@testing-library/react";

import { Locations } from "../locations";

describe("<Location/>", () => {
  it("should show title header", async () => {
    render(<Locations />);

    expect(screen.getByText("Locations where we buy properties")).toBeVisible();
  });
});
