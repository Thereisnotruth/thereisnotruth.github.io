import { expect, test } from "@playwright/test"

test("desktop home keeps semantic sidebar layout", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/")

  const sidebar = page.getByRole("complementary", {
    name: "Profile and site navigation",
  })
  const main = page.getByRole("main")
  const nav = page.getByRole("navigation", { name: "Primary navigation" })

  await expect(sidebar).toBeVisible()
  await expect(main).toBeVisible()
  await expect(nav).toBeVisible()

  const sidebarBox = await sidebar.boundingBox()
  const mainBox = await main.boundingBox()

  expect(sidebarBox).not.toBeNull()
  expect(mainBox).not.toBeNull()
  expect(sidebarBox!.width).toBeGreaterThan(200)
  expect(sidebarBox!.x + sidebarBox!.width).toBeLessThanOrEqual(mainBox!.x + 1)
})

test("mobile home has no horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")

  await expect(page.getByRole("main")).toBeVisible()

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  )

  expect(hasHorizontalOverflow).toBe(false)
})

test("mobile home keeps navigation visible", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto("/")

  const nav = page.getByRole("navigation", { name: "Primary navigation" })

  await expect(nav).toBeVisible()
  await expect(nav.getByRole("link", { name: "Home" })).toBeVisible()
  await expect(nav.getByRole("link", { name: "Categories" })).toBeVisible()
  await expect(nav.getByRole("link", { name: "Archive" })).toBeVisible()
  await expect(nav.getByRole("link", { name: "About" })).toBeVisible()
})
