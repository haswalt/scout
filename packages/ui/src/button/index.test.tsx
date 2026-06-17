import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./";

describe("Button", () => {
  it("renders with children", () => {
    render(<Button>Submit</Button>);

    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toBeInTheDocument();
  });
});
