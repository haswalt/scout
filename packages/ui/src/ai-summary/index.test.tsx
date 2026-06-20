import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { AiSummary } from "./";

describe("AiSummary", () => {
  it("renders content and forwards native attributes", () => {
    render(
      <AiSummary data-testid="ai-summary">
        Hello world!
      </AiSummary>,
    );

    expect(screen.getByText("Hello world!")).toBeInTheDocument();
    expect(screen.getByTestId("ai-summary")).toBeInTheDocument();
  });
});
