import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { EmptyState } from "./empty-state";

describe("EmptyState", () => {
  it("announces a concise status with a semantic heading", () => {
    render(
      <EmptyState
        headingAs="h1"
        title="Area details unavailable"
        description="Try again later."
      />,
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Area details unavailable",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveTextContent("Try again later.");
  });
});
