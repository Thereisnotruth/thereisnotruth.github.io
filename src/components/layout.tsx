import * as React from "react"

import Sidebar from "./sidebar"
import ThemeToggle from "./theme-toggle"

import "../styles/layout.css"

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Sidebar />
      <ThemeToggle />
      <main className="right">
        <div className="content">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
