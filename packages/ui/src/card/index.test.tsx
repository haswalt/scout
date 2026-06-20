import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import {
  Card,
  CardBody,
  CardDivider,
  CardFooter,
  CardHeader,
  CardMedia,
} from "./";

describe("Card", () => {
  it("renders every region with its semantic element", () => {
    render(
      <Card data-testid="card">
        <CardMedia>
          <img src="/park.jpg" alt="A local park" />
        </CardMedia>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardDivider />
        <CardFooter>Footer</CardFooter>
      </Card>,
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
      <Card
        padding="lg"
        row
        tone="tint"
        elevated
        interactive
        data-testid="card"
      >
        <CardHeader data-testid="header">Header</CardHeader>
        <CardBody data-testid="body">Body</CardBody>
        <CardFooter data-testid="footer">Footer</CardFooter>
      </Card>,
    );

    expect(screen.getByTestId("card").className).not.toBe("");
    expect(screen.getByTestId("header").className).not.toBe("");
    expect(screen.getByTestId("body").className).not.toBe("");
    expect(screen.getByTestId("footer").className).not.toBe("");
  });

  it("can expose interactive card semantics and disabled state", () => {
    render(
      <Card interactive role="button" tabIndex={0} aria-disabled="true">
        View neighbourhood
      </Card>,
    );

    expect(
      screen.getByRole("button", { name: "View neighbourhood" }),
    ).toHaveAttribute("aria-disabled", "true");
  });
});
