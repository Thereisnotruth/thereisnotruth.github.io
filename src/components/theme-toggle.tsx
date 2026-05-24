import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/theme-toggle.css"

type Theme = "light" | "dark"

const storageKey = "site-theme"

const getStoredTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light"
  }

  try {
    return window.localStorage?.getItem(storageKey) === "dark" ? "dark" : "light"
  } catch {
    return "light"
  }
}

const storeTheme = (theme: Theme) => {
  try {
    window.localStorage?.setItem(storageKey, theme)
  } catch {
    // Storage can be unavailable in restricted browser contexts.
  }
}

const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState<Theme>("light")
  const isDark = theme === "dark"

  React.useEffect(() => {
    setTheme(getStoredTheme())
  }, [])

  React.useEffect(() => {
    applyTheme(theme)
    storeTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark")
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {isDark ? (
          <StaticImage src="../images/lightbulb-solid.svg" alt="" />
        ) : (
          <StaticImage src="../images/moon-solid.svg" alt="" />
        )}
      </span>
      <span className="theme-toggle-label">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  )
}

export default ThemeToggle
