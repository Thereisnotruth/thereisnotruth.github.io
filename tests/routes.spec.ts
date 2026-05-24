import { expect, test } from "@playwright/test"

const routes = [
  {
    path: "/",
    visibleContent: (page) =>
      page.getByRole("link", { name: /글 상세 보기: 도커 시작하기/ }),
  },
  {
    path: "/categories/",
    visibleContent: (page) => page.getByRole("link", { name: "devops" }),
  },
  {
    path: "/archive/",
    visibleContent: (page) =>
      page.getByRole("heading", { name: "Archive" }),
  },
  {
    path: "/devops/230105_devops_1/",
    visibleContent: (page) =>
      page.getByRole("heading", { name: "도커 시작하기" }).first(),
  },
]

for (const route of routes) {
  test(`${route.path} renders`, async ({ page }) => {
    await page.goto(route.path)

    await expect(route.visibleContent(page)).toBeVisible({ timeout: 15_000 })
    await expect(page.getByRole("main")).toBeVisible()
    await expect(
      page.getByRole("complementary", { name: "Profile and site navigation" }),
    ).toBeVisible()
    await expect(page.getByRole("navigation", { name: "Primary navigation" }))
      .toBeVisible()
    await expect(page.getByText(/404|not found/i)).toHaveCount(0)
  })
}
