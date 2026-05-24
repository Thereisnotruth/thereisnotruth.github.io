import { expect, test } from "@playwright/test"

test("theme toggle exists", async ({ page }) => {
  await page.goto("/")

  await expect(
    page.getByRole("button", { name: "Switch to dark mode" }),
  ).toBeVisible()
})

test("theme toggle switches light and dark modes", async ({ page }) => {
  await page.goto("/")

  const toggle = page.getByRole("button", { name: "Switch to dark mode" })
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light")
  await expect(toggle).toHaveAttribute("aria-pressed", "false")

  await toggle.click()

  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark")
  await expect(
    page.getByRole("button", { name: "Switch to light mode" }),
  ).toHaveAttribute("aria-pressed", "true")
})

test("pagination active button changes color with theme", async ({ page }) => {
  await page.goto("/")

  const activePage = page.locator(".pagination-button[aria-current='page']")
  await expect(activePage).toBeVisible()

  const lightBackground = await activePage.evaluate(
    (element) => getComputedStyle(element).backgroundColor,
  )

  await page.getByRole("button", { name: "Switch to dark mode" }).click()

  const darkBackground = await activePage.evaluate(
    (element) => getComputedStyle(element).backgroundColor,
  )

  expect(lightBackground).not.toBe(darkBackground)
})
