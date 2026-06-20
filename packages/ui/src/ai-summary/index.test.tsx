import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { AiSummary } from "./";

describe("AiSummary", () => {
  it("renders content and forwards native attributes", () => {
    render(
      <AiSummary
        summary="Hello world!"
        className="consumer-class"
        data-testid="ai-summary"
      />,
    );

    expect(screen.getByText("Hello world!")).toBeInTheDocument();
    expect(screen.getByTestId("ai-summary")).toHaveClass("consumer-class");
    expect(screen.getByText("Hello world!")).toHaveAttribute(
      "aria-live",
      "polite",
    );
  });

  it("shows progress while the summary is streaming", () => {
    render(<AiSummary summary="Partial summary" streaming />);

    expect(screen.getByText("analysing…")).toBeInTheDocument();
    expect(screen.getByText("Partial summary")).toHaveAttribute(
      "aria-live",
      "polite",
    );
  });
});
