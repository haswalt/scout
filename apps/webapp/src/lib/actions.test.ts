import { beforeEach, describe, expect, it, vi } from "vitest";

const homedata = vi.hoisted(() => ({
  getAddressFind: vi.fn(),
  getAddressPostcodeByPostcode: vi.fn(),
  getDeprivation: vi.fn(),
  getLiveListingsSearch: vi.fn(),
}));

vi.mock("@repo/homedata", () => homedata);

import {
  fetchDeprivationData,
  fetchLocation,
  fetchPostcode,
  fetchProperties,
} from "./actions";

describe("HomeData application adapters", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns a route slug for the first address suggestion", async () => {
    homedata.getAddressFind.mockResolvedValue({
      data: {
        suggestions: [{ postcode: "EH3 9NE" }],
      },
    });

    await expect(fetchPostcode("Gilmore Place")).resolves.toBe("eh39ne");
    expect(homedata.getAddressFind).toHaveBeenCalledWith(
      expect.objectContaining({
        query: { q: "Gilmore Place" },
        throwOnError: true,
      }),
    );
  });

  it("returns undefined when address lookup has no suggestions", async () => {
    homedata.getAddressFind.mockResolvedValue({
      data: { suggestions: [] },
    });

    await expect(fetchPostcode("Unknown place")).resolves.toBeUndefined();
  });

  it("normalises postcodes before requesting sale listings", async () => {
    const results = [{ id: "property-1" }];
    homedata.getLiveListingsSearch.mockResolvedValue({
      data: { results },
    });

    await expect(fetchProperties("eh39ne")).resolves.toEqual(results);
    expect(homedata.getLiveListingsSearch).toHaveBeenCalledWith(
      expect.objectContaining({
        query: {
          page_size: 4,
          postcode: "EH3 9NE",
          transaction_type: "Sale",
        },
      }),
    );
  });

  it("returns deprivation and location data", async () => {
    const deprivation = { postcode: "EH3 9NE" };
    const location = { street: "Gilmore Place", town: "Edinburgh" };
    homedata.getDeprivation.mockResolvedValue({ data: deprivation });
    homedata.getAddressPostcodeByPostcode.mockResolvedValue({
      data: { addresses: [location] },
    });

    await expect(fetchDeprivationData("eh39ne")).resolves.toEqual(deprivation);
    await expect(fetchLocation("eh39ne")).resolves.toEqual(location);
  });
});
