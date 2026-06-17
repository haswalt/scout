import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./";

describe("Badge", () => {
  it("renders with children", () => {
    render(<Badge>Hello world!</Badge>);

    const element = screen.getByText("Hello world!");
    expect(element).toBeInTheDocument();
  });
});
