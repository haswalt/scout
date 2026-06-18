import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./";

describe("Button", () => {
  it("renders an accessible button and forwards attributes", () => {
    render(
      <Button type="submit" name="action" value="save">
        Save
      </Button>,
    );

    expect(screen.getByRole("button", { name: "Save" })).toHaveAttribute(
      "type",
      "submit",
    );
    expect(screen.getByRole("button")).toHaveAttribute("name", "action");
    expect(screen.getByRole("button")).toHaveValue("save");
  });

  it("handles mouse and keyboard activation", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Continue</Button>);

    const button = screen.getByRole("button", { name: "Continue" });
    await user.click(button);
    button.focus();
    await user.keyboard("{Enter}");
    await user.keyboard(" ");

    expect(onClick).toHaveBeenCalledTimes(3);
  });

  it("prevents interaction when disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Continue
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Continue" });
    expect(button).toBeDisabled();
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("applies all variants and sizes", () => {
    const { rerender } = render(
      <Button variant="chip" size="sm">
        Filter
      </Button>,
    );
    const chipClasses = screen.getByRole("button").className;

    rerender(
      <Button variant="ghost" size="lg">
        Dismiss
      </Button>,
    );

    expect(screen.getByRole("button").className).not.toBe(chipClasses);
  });
});
