import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Seo from "./seo"
import Sidebar from "./sidebar"
import Searchbar from "./searchbar"

import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <Searchbar />
      <div className="content">
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
