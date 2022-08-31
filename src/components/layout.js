import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

import Seo from "./seo"
import Sidebar from "./sidebar"

import "../styles/layout.css"

deckDeckGoHighlightElement();

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Seo title="네모장" />
      <Sidebar />
      <div className="right">
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
