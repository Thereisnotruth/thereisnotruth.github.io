import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Sidebar from "./sidebar"
import Searchbar from "./searchbar"
import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Sidebar />
      <Searchbar />
      <div style={{ float: `left` }}>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
