import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./";

describe("Badge", () => {
  it("renders content and forwards HTML attributes", () => {
    render(
      <Badge id="status" data-testid="badge">
        Available
      </Badge>,
    );

    expect(screen.getByText("Available")).toHaveAttribute("id", "status");
    expect(screen.getByTestId("badge")).toBeInTheDocument();
  });

  it("applies each visual variant", () => {
    const { rerender } = render(
      <Badge tone="success" soft dot data-testid="badge">
        Open
      </Badge>,
    );
    const successClasses = screen.getByTestId("badge").className;

    rerender(
      <Badge tone="warning" data-testid="badge">
        Caution
      </Badge>,
    );
    const warningClasses = screen.getByTestId("badge").className;

    rerender(
      <Badge tone="danger" data-testid="badge">
        Closed
      </Badge>,
    );

    expect(successClasses).not.toBe(warningClasses);
    expect(screen.getByTestId("badge").className).not.toBe(warningClasses);
  });

  it("supports explicit status semantics", () => {
    render(<Badge role="status">Saved</Badge>);

    expect(screen.getByRole("status")).toHaveTextContent("Saved");
  });
});
