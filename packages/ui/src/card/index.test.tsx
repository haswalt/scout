import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./";

describe("Card", () => {
  it("renders with children", () => {
    render(
      <Card.Root>
        <Card.Body>Hello world!</Card.Body>
      </Card.Root>,
    );

    const element = screen.getByText("Hello world!");
    expect(element).toBeInTheDocument();
  });
});
