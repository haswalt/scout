export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
};

export const normalizePostcode = (postcode: string) =>
  postcode
    .trim()
    .replaceAll(" ", "")
    .toUpperCase()
    .replace(/(.+)(.{3})$/, "$1 $2");

export const postcodeToSlug = (postcode: string) =>
  postcode.trim().toLowerCase().replaceAll(" ", "");

export const isUkPostcode = (value: string) =>
  /^[A-Z]{1,2}\d[A-Z\d]? \d[A-Z]{2}$/.test(normalizePostcode(value));

export const getToneLabel = (decile: number) => {
  if (decile >= 8) {
    return "success";
  }

  if (decile >= 4) {
    return "warning";
  }

  return "danger";
};
