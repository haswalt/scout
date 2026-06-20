"use server";

import {
  getAddressFind,
  getLiveListingsSearch,
  LiveListingsResponse,
} from "@repo/homedata";

export async function fetchPostcode(address: string) {
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
      return suggestion.postcode.toLowerCase().replaceAll(" ", "");
    }
  } catch (error) {
    console.error("HomeData address lookup failed", error);
  }

  return "po110qw";
}

export async function fetchProperties(
  postcode: string,
): Promise<LiveListingsResponse["results"]> {
  try {
    const normalizedPostcode = postcode
      .replaceAll(" ", "")
      .toUpperCase()
      .replace(/(.+)(.{3})$/, "$1 $2");

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
