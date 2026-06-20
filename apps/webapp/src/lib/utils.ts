export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
};

export const getToneLabel = (decile: number) => {
  if (decile >= 8) {
    return "success";
  }

  if (decile >= 4) {
    return "warning";
  }

  return "danger";
};
