import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/searchbar.css"

const Searchbar = () => (
  <div className="searchbar">
    <div className="searchbar-button">
      <StaticImage
        className="searchbar-icon"
        src="../images/magnifying-glass-solid.svg"
        alt=""
        />
    </div>
  </div>
)

export default Searchbar;