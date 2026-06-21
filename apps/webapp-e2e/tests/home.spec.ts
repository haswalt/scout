import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.route("**/api/summary", async (route) => {
    await route.fulfill({
      contentType: "text/plain",
      body: "This area performs strongly overall, with positive household income outcomes and a more mixed picture for recorded crime.",
    });
  });
  await page.route(
    "https://demotiles.maplibre.org/style.json",
    async (route) => {
      await route.fulfill({
        contentType: "application/json",
        body: JSON.stringify({ version: 8, sources: {}, layers: [] }),
      });
    },
  );
});

test("supports keyboard search and has no accessibility violations", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Discover your next neighbourhood",
    }),
  ).toBeVisible();

  const search = page.getByRole("textbox", { name: "Search by postcode" });
  const submit = page.getByRole("button", { name: "Explore" });

  await expect(submit).toBeDisabled();
  await search.fill("EH3 9NE");
  await expect(submit).toBeEnabled();
  await submit.click();

  await expect(page).toHaveURL(/\/eh39ne$/);
  await expect(page.getByRole("link", { name: "Scout home" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Gilmore Place" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Homes for sale nearby" }),
  ).toBeVisible();
  await expect(page.getByText("£425,000.00")).toBeVisible();

  const accessibility = await new AxeBuilder({ page }).analyze();
  expect(accessibility.violations).toEqual([]);
});

test("navigates from a curated location and returns home", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Gilmore Place, Edinburgh" }).click();

  await expect(page).toHaveURL(/\/eh39ne$/);
  await expect(page.getByRole("link", { name: "Scout home" })).toBeVisible();
  await expect(page.getByText("EH3 9NE", { exact: true })).toBeVisible();

  await page.getByRole("link", { name: "Scout home" }).click();
  await expect(page).toHaveURL("/");
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Discover your next neighbourhood",
    }),
  ).toBeVisible();

  const accessibility = await new AxeBuilder({ page }).analyze();
  expect(accessibility.violations).toEqual([]);
});

test("shows clear empty states when an area has no results", async ({
  page,
}) => {
  await page.goto("/");

  await page
    .getByRole("textbox", { name: "Search by postcode" })
    .fill("BS8 2NT");
  await page.getByRole("button", { name: "Explore" }).click();

  await expect(page).toHaveURL(/\/bs82nt$/);
  await expect(
    page.getByRole("heading", { name: "Area details unavailable" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Area profile unavailable" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "No homes for sale nearby" }),
  ).toBeVisible();
});
