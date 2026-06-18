import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { Skeleton } from "./";

describe("Skeleton", () => {
  it("renders with consumer-provided accessible loading semantics", () => {
    render(
      <Skeleton role="status" aria-label="Loading results">
        <span className="sr-only">Loading</span>
      </Skeleton>,
    );

    expect(
      screen.getByRole("status", { name: "Loading results" }),
    ).toHaveTextContent("Loading");
  });

  it.each(["text", "block", "circle", "pill"] as const)(
    "applies the %s shape",
    (shape) => {
      render(<Skeleton shape={shape} data-testid="skeleton" />);

      expect(screen.getByTestId("skeleton").className).not.toBe("");
    },
  );

  it("forwards dimensions and hidden state for decorative placeholders", () => {
    render(
      <Skeleton
        aria-hidden="true"
        style={{ width: 100, height: 20 }}
        data-testid="skeleton"
      />,
    );

    expect(screen.getByTestId("skeleton")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
    expect(screen.getByTestId("skeleton")).toHaveStyle({
      width: "100px",
      height: "20px",
    });
  });
});
