import { createServer } from "node:http";

const port = Number(process.argv[2] ?? 3200);

const address = {
  uprn: "100023336956",
  uprn_token: "e2e-address",
  address: "12 Gilmore Place, Edinburgh",
  building_name: "",
  building_number: "12",
  sub_building: "",
  street: "Gilmore Place",
  town: "Edinburgh",
};

const deprivation = {
  postcode: "EH3 9NE",
  lsoa: { code: "S01008788", name: "Edinburgh 020A" },
  lad: { code: "S12000036", name: "City of Edinburgh" },
  overall: {
    rank: 22000,
    decile: 8,
    score: 8,
    label: "Lower deprivation",
    short_label: "Strong overall",
    lad_rank: 12,
    lad_rank_description: "One of the stronger areas in Edinburgh",
  },
  domains: [
    {
      domain: "income",
      label: "Income",
      short_label: "Income",
      description: "Household income outcomes",
      rank: 24000,
      decile: 8,
      score: 8,
      score_label: "Strong",
      score_short: "Strong",
      lad_rank: 10,
    },
    {
      domain: "crime",
      label: "Crime",
      short_label: "Crime",
      description: "Recorded crime outcomes",
      rank: 18000,
      decile: 6,
      score: 6,
      score_label: "Mixed",
      score_short: "Mixed",
      lad_rank: 22,
    },
  ],
  metadata: {
    source: "Test area data",
    total_lsoas: 33755,
    total_lads: 317,
    score_explanation: "Higher is better",
    rank_explanation: "Higher is better",
    neighbourhood_explanation: "Local neighbourhood data",
  },
};

const property = {
  id: "e2e-property-1",
  street: "Gilmore Place",
  postcode: "EH3 9NE",
  transaction_type: "Sale",
  latest_status: "For sale",
  latest_price: 425000,
  source: "Test fixture",
  bedrooms: 2,
  bathrooms: 1,
  reception_rooms: 1,
  property_type: "Flat",
  ownership: "Freehold",
  is_new_build: false,
  has_garden: false,
  has_parking: true,
  has_solar_panels: false,
  is_reduced: true,
  times_reduced: 1,
  is_withdrawn: false,
  days_on_market: 12,
  added_date: "2026-06-01",
  agent_name: "Scout Test Homes",
};

const json = (response, body) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(body));
};

const notFound = (response) => {
  response.writeHead(404, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ detail: "No fixture data found" }));
};

createServer((request, response) => {
  const url = new URL(request.url ?? "/", `http://127.0.0.1:${port}`);
  const postcode = url.searchParams.get("postcode")?.replaceAll(" ", "");
  const hasResults = postcode?.toUpperCase() === "EH39NE";

  if (url.pathname === "/health") {
    return json(response, { status: "ok" });
  }

  if (url.pathname.startsWith("/address/postcode/")) {
    const requestedPostcode = decodeURIComponent(
      url.pathname.replace("/address/postcode/", ""),
    ).replaceAll(" ", "");

    return json(response, {
      postcode: requestedPostcode,
      count: requestedPostcode.toUpperCase() === "EH39NE" ? 1 : 0,
      addresses: requestedPostcode.toUpperCase() === "EH39NE" ? [address] : [],
    });
  }

  if (url.pathname === "/deprivation/") {
    return json(response, hasResults ? deprivation : null);
  }

  if (url.pathname === "/live-listings/search/") {
    const results = hasResults ? [property] : [];
    return json(response, {
      count: results.length,
      page: 1,
      page_size: 4,
      total_pages: results.length ? 1 : 0,
      results,
    });
  }

  if (url.pathname === "/address/find/") {
    return json(response, {
      count: 1,
      suggestions: [
        {
          uprn: 100023336956,
          uprn_token: "e2e-suggestion",
          address: "12 Gilmore Place, Edinburgh",
          postcode: "EH3 9NE",
          town: "Edinburgh",
        },
      ],
    });
  }

  notFound(response);
}).listen(port, "127.0.0.1");
