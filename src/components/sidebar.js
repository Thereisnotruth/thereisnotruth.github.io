import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/sidebar.css"

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-header">
      <StaticImage
        className="sidebar-profile-img"
        src="../images/profile.png"
      /> 
      <div className="sidebar-profile-name">
        고태진
      </div>
      <div className="sidebar-profile-intro">
        개발자
      </div>
    </div>
    <div className="sidebar-nav">
      <div className="sidebar-nav-item">
        <StaticImage
          className="sidebar-nav-icon"
          alt=""
          src="../images/house-solid.svg"
        />
        <Link
          to="/"
          className="sidebar-nav-name"
          data-link
        >
          Home
        </Link>
      </div>
      <div className="sidebar-nav-item">
        <StaticImage
          className="sidebar-nav-icon"
          alt=""
          src="../images/pen-to-square-solid.svg"
        />
        <Link
          to="/blog"
          className="sidebar-nav-name"
          data-link
        >
          Blog
        </Link>
      </div>
      <div className="sidebar-nav-item">
        <StaticImage
          className="sidebar-nav-icon"
          src="../images/box-archive-solid.svg"
        />
        <Link
          to="/archive"
          className="sidebar-nav-name"
          data-link
        >
          Archive
        </Link>
      </div>
      <div className="sidebar-nav-item">
        <StaticImage
          className="sidebar-nav-icon"
          src="../images/gear-solid.svg"
        />
        <Link
          to="/projects"
          className="sidebar-nav-name"
          data-link
        >
          Projects
        </Link>
      </div>
      <div className="sidebar-nav-item">
        <StaticImage
          className="sidebar-nav-icon"
          src="../images/link-solid.svg"
        />
        <Link
          to="/links"
          className="sidebar-nav-name"
          data-link
        >
          Links
        </Link>
      </div>
      <div className="sidebar-nav-item">
        <StaticImage
          className="sidebar-nav-icon"
          src="../images/user-solid.svg"
        /> 
        <Link
          to="/about"
          className="sidebar-nav-name"
          data-link
        >
          About
        </Link>
      </div>
    </div>
    <div className="sidebar-link">
      <div className="sidebar-link-header">
        Contact 
      </div>
      <div className="sidebar-link-item">
        <StaticImage
          className="sidebar-link-icon"
          src="../images/github-brands.svg"
        />
      </div>
      <div className="sidebar-link-item">
        <StaticImage
          className="sidebar-link-icon"
          src="../images/linkedin-in-brands.svg"
        />
      </div>
    </div>
    <div className="sidebar-mod">
      <StaticImage
        className="sidebar-mod-icon"
        src="../images/moon-solid.svg"
      />
    </div>
  </div>
)

export default Sidebar;