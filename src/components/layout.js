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
      <Seo title="네모장" />
      <Sidebar />
      <div className="right">
      <Searchbar />
      <div className="content">
        {children}
      </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
