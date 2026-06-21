"use server";

import {
  type DeprivationResponse,
  getAddressFind,
  getAddressPostcodeByPostcode,
  getDeprivation,
  getLiveListingsSearch,
  type LiveListingsResponse,
  type PostcodeLookup,
} from "@repo/homedata";
import { normalizePostcode, postcodeToSlug } from "./utils";

export async function fetchPostcode(
  address: string,
): Promise<string | undefined> {
  try {
    const { data } = await getAddressFind({
      cache: "force-cache",
      next: {
        revalidate: 3600,
        tags: ["address"],
      },
      throwOnError: true,
      query: {
        q: address,
      },
    });

    const suggestion = data.suggestions.at(0);

    if (suggestion) {
      return postcodeToSlug(suggestion.postcode);
    }
  } catch (error) {
    console.error("HomeData address lookup failed", error);
  }
}

export async function fetchProperties(
  postcode: string,
): Promise<LiveListingsResponse["results"]> {
  try {
    const normalizedPostcode = normalizePostcode(postcode);

    const { data } = await getLiveListingsSearch({
      cache: "force-cache",
      next: {
        revalidate: 3600,
        tags: ["search"],
      },
      throwOnError: true,
      query: {
        postcode: normalizedPostcode,
        transaction_type: "Sale",
        page_size: 4,
      },
    });

    return data.results;
  } catch (error) {
    console.error("HomeData live listings lookup failed", error);
  }

  return [];
}

export async function fetchDeprivationData(
  postcode: string,
): Promise<DeprivationResponse | undefined> {
  try {
    const { data } = await getDeprivation({
      cache: "force-cache",
      next: {
        revalidate: 3600,
        tags: ["deprivation"],
      },
      throwOnError: true,
      query: {
        postcode,
      },
    });

    return data;
  } catch (error) {
    console.error("HomeData deprivation lookup failed", error);
  }
}

export async function fetchLocation(
  postcode: string,
): Promise<PostcodeLookup | undefined> {
  try {
    const { data } = await getAddressPostcodeByPostcode({
      cache: "force-cache",
      next: {
        revalidate: 3600,
        tags: ["deprivation"],
      },
      throwOnError: true,
      path: {
        postcode,
      },
    });

    if (data.addresses.length) {
      return data.addresses[0];
    }
  } catch (error) {
    console.error("HomeData location lookup failed", error);
  }
}
