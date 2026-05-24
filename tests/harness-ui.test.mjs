import assert from "node:assert/strict"
import { readFileSync } from "node:fs"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")

const files = {
  layout: read("src/components/layout.tsx"),
  sidebar: read("src/components/sidebar.tsx"),
  themeToggle: read("src/components/theme-toggle.tsx"),
  indexPage: read("src/pages/index.tsx"),
  categoriesPage: read("src/pages/categories.tsx"),
  archivePage: read("src/pages/archive.tsx"),
  aboutPage: read("src/pages/about.tsx"),
  postCard: read("src/components/post-card.tsx"),
  layoutCss: read("src/styles/layout.css"),
  sidebarCss: read("src/styles/sidebar.css"),
  themeToggleCss: read("src/styles/theme-toggle.css"),
  listCardCss: read("src/styles/list_card.css"),
  cardCss: read("src/styles/card.css"),
  archiveCss: read("src/styles/archive.css"),
  globalCss: read("src/styles/global.css"),
}

const test = (name, fn) => {
  try {
    fn()
    console.log(`ok - ${name}`)
  } catch (error) {
    console.error(`not ok - ${name}`)
    throw error
  }
}

test("home post selection exposes a direct titled detail link", () => {
  assert.match(files.indexPage, /<Link[^>]+className="post-link"/)
  assert.match(files.indexPage, /aria-label=\{`글 상세 보기: \$\{node\.frontmatter\.title\}`\}/)
  assert.match(files.indexPage, /to=\{node\.fields\.slug\}/)
  assert.match(files.postCard, /<article className="post-card"/)
  assert.match(files.postCard, /<div className="post-card-body">/)
})

test("post detail follows stitch article shell", () => {
  assert.match(files.postCard, /className="post-back-link"/)
  assert.match(files.postCard, /to="\/"/)
  assert.match(files.postCard, /className="post-card-meta"/)
  assert.match(files.postCard, /frontmatter\.category/)
  assert.match(files.postCard, /frontmatter\.date/)
  assert.match(files.postCard, /className="post-card-content"/)
})

test("post detail prose uses long-form editorial styling", () => {
  assert.match(files.cardCss, /max-width:\s*65ch;/)
  assert.match(files.cardCss, /text-align:\s*center;/)
  assert.match(files.cardCss, /font-size:\s*18px;/)
  assert.match(files.cardCss, /line-height:\s*1\.7;/)
  assert.match(files.cardCss, /border-left:\s*4px solid var\(--color-primary\);/)
  assert.match(files.cardCss, /background:\s*var\(--color-surface-container-low\);/)
})

test("post detail does not force automatic drop caps", () => {
  assert.doesNotMatch(files.cardCss, /::first-letter/)
})

test("stitch scale tokens keep the screen compact and readable", () => {
  assert.match(files.globalCss, /--sidebar-width:\s*256px;/)
  assert.match(files.layoutCss, /max-width:\s*760px;/)
  assert.match(files.layoutCss, /padding:\s*56px 40px;/)
  assert.match(files.listCardCss, /font-size:\s*28px;/)
  assert.match(files.listCardCss, /font-size:\s*16px;/)
  assert.match(files.cardCss, /max-width:\s*760px;/)
})

test("theme toggle is a small fixed top-right fab", () => {
  assert.match(files.layout, /<ThemeToggle \/>/)
  assert.doesNotMatch(files.sidebar, /<ThemeToggle \/>/)
  assert.match(files.themeToggleCss, /position:\s*fixed;/)
  assert.match(files.themeToggleCss, /top:\s*16px;/)
  assert.match(files.themeToggleCss, /right:\s*16px;/)
  assert.match(files.themeToggleCss, /width:\s*44px;/)
  assert.match(files.themeToggleCss, /height:\s*44px;/)
  assert.doesNotMatch(files.themeToggle, /theme-toggle-label/)
})

test("sidebar icons inherit semantic theme colors", () => {
  assert.doesNotMatch(files.sidebar, /StaticImage[\s\S]*className="sidebar-nav-icon"/)
  assert.doesNotMatch(files.sidebar, /StaticImage[\s\S]*className="sidebar-link-icon"/)
  assert.match(files.sidebarCss, /background:\s*currentColor;/)
  assert.match(files.sidebarCss, /mask:\s*var\(--icon\) center \/ contain no-repeat;/)
  assert.match(files.sidebarCss, /color:\s*var\(--color-primary\);/)
  assert.match(files.sidebarCss, /color:\s*var\(--color-on-surface-variant\);/)
})

test("secondary pages use stitch typography tokens", () => {
  assert.match(files.categoriesPage, /className="list-card-title"/)
  assert.match(files.archivePage, /className="card page-card"/)
  assert.match(files.aboutPage, /className="card about-card"/)
  assert.match(files.cardCss, /\.card[\s\S]*font-family:\s*var\(--font-body\);/)
  assert.match(files.cardCss, /\.page-card h1,[\s\S]*font-family:\s*var\(--font-display\);/)
  assert.match(files.cardCss, /\.about-card h1[\s\S]*font-family:\s*var\(--font-display\);/)
  assert.match(files.archiveCss, /\.archive[\s\S]*font-family:\s*var\(--font-body\);/)
  assert.match(files.archiveCss, /\.archive-year[\s\S]*font-family:\s*var\(--font-display\);/)
  assert.match(files.archiveCss, /\.archive-title[\s\S]*font-family:\s*var\(--font-label\);/)
})
