import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Skeleton } from "./";

describe("Skeleton", () => {
  it("renders with children", () => {
    render(<Skeleton>Hello world!</Skeleton>);

    const element = screen.getByText("Hello world!");
    expect(element).toBeInTheDocument();
  });
});
