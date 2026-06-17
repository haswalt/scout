import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Typography } from "./";

describe("Typography", () => {
  it("renders with children", () => {
    render(<Typography>Hello world!</Typography>);

    const element = screen.getByText("Hello world!");
    expect(element).toBeInTheDocument();
  });

  it("renders `as` the given element", () => {
    render(<Typography as="span">Hello world!</Typography>);

    const element = screen.getByText("Hello world!");
    expect(element.tagName).toBe("SPAN");
  });
});
