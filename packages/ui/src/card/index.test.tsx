import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./";

describe("Card", () => {
  it("renders every region with its semantic element", () => {
    render(
      <Card.Root data-testid="card">
        <Card.Media src="/park.jpg" alt="A local park" />
        <Card.Header>Header</Card.Header>
        <Card.Body>Body</Card.Body>
        <Card.Divider />
        <Card.Footer>Footer</Card.Footer>
      </Card.Root>,
    );

    expect(screen.getByTestId("card").tagName).toBe("DIV");
    expect(screen.getByRole("img", { name: "A local park" })).toHaveAttribute(
      "src",
      "/park.jpg",
    );
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
    expect(screen.getByRole("separator")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("shares variant styles with all card regions", () => {
    render(
      <Card.Root
        padding="lg"
        row
        tone="tint"
        elevated
        interactive
        data-testid="card"
      >
        <Card.Header data-testid="header">Header</Card.Header>
        <Card.Body data-testid="body">Body</Card.Body>
        <Card.Footer data-testid="footer">Footer</Card.Footer>
      </Card.Root>,
    );

    expect(screen.getByTestId("card").className).not.toBe("");
    expect(screen.getByTestId("header").className).not.toBe("");
    expect(screen.getByTestId("body").className).not.toBe("");
    expect(screen.getByTestId("footer").className).not.toBe("");
  });

  it("can expose interactive card semantics and disabled state", () => {
    render(
      <Card.Root
        interactive
        role="button"
        tabIndex={0}
        aria-disabled="true"
      >
        View neighbourhood
      </Card.Root>,
    );

    expect(
      screen.getByRole("button", { name: "View neighbourhood" }),
    ).toHaveAttribute("aria-disabled", "true");
  });
});
