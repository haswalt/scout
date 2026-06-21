import { describe, expect, it } from "vitest";
import {
  formatCurrency,
  getToneLabel,
  isUkPostcode,
  normalizePostcode,
  postcodeToSlug,
} from "./utils";

describe("application utilities", () => {
  it("normalises postcode values for HomeData", () => {
    expect(normalizePostcode(" eh39ne ")).toBe("EH3 9NE");
    expect(normalizePostcode("M25 1PQ")).toBe("M25 1PQ");
  });

  it("creates stable lowercase route slugs", () => {
    expect(postcodeToSlug(" EH3 9NE ")).toBe("eh39ne");
  });

  it.each([
    ["EH3 9NE", true],
    ["eh39ne", true],
    ["Peckham, London", false],
    ["EH3", false],
  ])("identifies whether %s is a UK postcode", (value, expected) => {
    expect(isUkPostcode(value)).toBe(expected);
  });

  it("formats property prices for UK consumers", () => {
    expect(formatCurrency(425000)).toBe("£425,000.00");
  });

  it.each([
    [1, "danger"],
    [3, "danger"],
    [4, "warning"],
    [7, "warning"],
    [8, "success"],
    [10, "success"],
  ] as const)("maps decile %i to %s", (decile, tone) => {
    expect(getToneLabel(decile)).toBe(tone);
  });
});
