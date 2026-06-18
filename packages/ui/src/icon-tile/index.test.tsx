import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/react";
import { MapPin } from "lucide-react";
import { IconTile } from "./";

describe("IconTile", () => {
  it("renders the supplied icon as decorative content", () => {
    const { container } = render(<IconTile icon={MapPin} />);
    const tile = container.firstElementChild;
    const icon = container.querySelector("svg");

    expect(tile).toHaveAttribute("aria-hidden", "true");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("aria-hidden", "true");
  });

  it("applies each size variant", () => {
    const { container, rerender } = render(
      <IconTile icon={MapPin} size="sm" />,
    );
    const smallClasses = container.firstElementChild?.className;

    rerender(<IconTile icon={MapPin} size="md" />);
    const mediumClasses = container.firstElementChild?.className;

    rerender(<IconTile icon={MapPin} size="lg" />);
    const largeClasses = container.firstElementChild?.className;

    expect(mediumClasses).not.toBe(smallClasses);
    expect(largeClasses).not.toBe(mediumClasses);
  });
});
