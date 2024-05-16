import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "../src/Components/Header";
import React from "react";
describe("Header", () => {
  it("should render the header", () => {
    render(<Header />);
    expect(screen.getByText("S.O.S Abrigo Gaúcho")).toBeInTheDocument();
  });
});
