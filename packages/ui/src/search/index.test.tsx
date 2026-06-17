import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Search } from "./";

describe("Search", () => {
  it("renders with children", () => {
    render(<Search>Hello world!</Search>);

    const element = screen.getByText("Hello world!");
    expect(element).toBeInTheDocument();
  });
});
