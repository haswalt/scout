import { getAddressFind } from "@repo/homedata";

export async function fetchPostcode(address: string) {
  try {
    const { data } = await getAddressFind({
      cache: "force-cache",
      next: {
        revalidate: 10,
        tags: ["address"],
      },
      query: {
        query: encodeURIComponent(address),
      },
    });

    if (data?.suggestions.length) {
      return data.suggestions[0]?.postcode.toLowerCase().replaceAll(" ", "");
    }
  } catch (error) {
    console.error(error);
  }

  return "po110qw";
}
