import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BreadCrumbNav } from "../src/Components/BreadCrumbNav";
import React from "react";

describe("BreadCrumbNav", async () => {
  it("should render BreadCrumbNav", () => {
    render(<BreadCrumbNav />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("should have cursor pointer if item does not have attribute active", () => {
    render(<BreadCrumbNav />);
    const items = screen.queryAllByRole("link");
    items.forEach((item) => {
      if (!item.getAttribute("active")) {
        expect(item).toHaveStyle("cursor: pointer;");
      }
    });
  });
});
