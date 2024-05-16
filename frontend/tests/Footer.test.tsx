import { render, screen } from "@testing-library/react";
import { Footer } from "../src/Components/Footer";
import React from "react";
describe("Footer", async () => {
  it("should render the footer", () => {
    render(<Footer />);
    expect(
      screen.getByText("©Matheus Riskalla, 2024 . All Rights Reserved.")
    ).toBeInTheDocument();
  });
});
