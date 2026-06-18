import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { Typography } from "./";

describe("Typography", () => {
  it("renders a paragraph by default and forwards attributes", () => {
    render(
      <Typography id="intro" aria-describedby="hint">
        Hello world!
      </Typography>,
    );

    const element = screen.getByText("Hello world!");
    expect(element.tagName).toBe("P");
    expect(element).toHaveAttribute("id", "intro");
    expect(element).toHaveAttribute("aria-describedby", "hint");
  });

  it("renders semantic headings through the as prop", () => {
    render(
      <Typography as="h2" variant="heading">
        Local amenities
      </Typography>,
    );

    expect(
      screen.getByRole("heading", { level: 2, name: "Local amenities" }),
    ).toBeInTheDocument();
  });

  it("merges custom classes with recipe classes", () => {
    render(
      <Typography className="consumer-class" tone="muted" align="center">
        Description
      </Typography>,
    );

    expect(screen.getByText("Description")).toHaveClass("consumer-class");
    expect(screen.getByText("Description").className).not.toBe(
      "consumer-class",
    );
  });

  it("applies every typography variant", () => {
    const variants = [
      "display",
      "heading",
      "title",
      "eyebrow",
      "body",
      "stat",
      "caption",
      "editorial",
    ] as const;

    const { rerender } = render(
      <Typography variant={variants[0]}>Text</Typography>,
    );
    const classes = new Set([screen.getByText("Text").className]);

    for (const variant of variants.slice(1)) {
      rerender(<Typography variant={variant}>Text</Typography>);
      classes.add(screen.getByText("Text").className);
    }

    expect(classes).toHaveLength(variants.length);
  });

  it("applies tone, alignment, and truncation variants", () => {
    render(
      <Typography
        tone="onAccent"
        align="end"
        truncate
        title="A complete accessible version"
      >
        Truncated text
      </Typography>,
    );

    expect(screen.getByTitle("A complete accessible version").className).not.toBe(
      "",
    );
  });
});
