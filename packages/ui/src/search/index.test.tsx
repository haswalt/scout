import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Search } from "./";

describe("Search", () => {
  it("renders a labelled search input and decorative icon", () => {
    const { container } = render(<Search placeholder="Enter a postcode" />);

    expect(
      screen.getByRole("textbox", { name: "Search by postcode" }),
    ).toHaveAttribute("placeholder", "Enter a postcode");
    expect(container.querySelector("svg")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
  });

  it("allows consumers to override the accessible name", () => {
    render(<Search aria-label="Find an area" />);

    expect(
      screen.getByRole("textbox", { name: "Find an area" }),
    ).toBeInTheDocument();
  });

  it("updates the input and submits valid searches", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn((event: React.FormEvent) => event.preventDefault());
    render(<Search valid onSubmit={onSubmit} />);

    const input = screen.getByRole("textbox", { name: "Search by postcode" });
    await user.type(input, "SW1A 1AA");
    await user.click(screen.getByRole("button", { name: "Explore" }));

    expect(input).toHaveValue("SW1A 1AA");
    expect(onSubmit).toHaveBeenCalledOnce();
  });

  it("disables submission when invalid", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn((event: React.FormEvent) => event.preventDefault());
    render(<Search valid={false} onSubmit={onSubmit} />);

    const button = screen.getByRole("button", { name: "Explore" });
    expect(button).toBeDisabled();
    await user.click(button);
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("submits from the keyboard when valid", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn((event: React.FormEvent) => event.preventDefault());
    render(<Search valid size="header" onSubmit={onSubmit} />);

    const input = screen.getByRole("textbox", { name: "Search by postcode" });
    await user.type(input, "E1 6AN{Enter}");

    expect(onSubmit).toHaveBeenCalledOnce();
  });

  it("renders a non-interactive value in read-only mode", () => {
    render(<Search readOnly size="header" value="EH3 9NE" />);

    expect(screen.getByText("EH3 9NE")).toBeInTheDocument();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Explore" }),
    ).not.toBeInTheDocument();
  });
});
