import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { IconTile } from "./";

describe("IconTile", () => {
  it("renders with children", () => {
    render(<IconTile>Hello world!</IconTile>);

    const element = screen.getByText("Hello world!");
    expect(element).toBeInTheDocument();
  });
});
