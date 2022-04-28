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
        alt=""
      /> 
      <div className="sidebar-profile-name">
        고태진
      </div>
      <div className="sidebar-profile-intro">
        개발자
      </div>
    </div>
    <div className="sidebar-nav">
      <Link
        className="sidebar-nav-item"
        to="/"
      >
        <StaticImage
          className="sidebar-nav-icon"
          src="../images/house-solid.svg"
          alt=""
        />
        <div className="sidebar-nav-name">
          Home
        </div>
      </Link>
      <Link
        className="sidebar-nav-item"
        to="/blog"
      >
        <StaticImage
          className="sidebar-nav-icon"
          src="../images/pen-to-square-solid.svg"
          alt=""
        />
        <div className="sidebar-nav-name">
          Blog
        </div>
      </Link>
      <Link
        className="sidebar-nav-item"
        to="/archive"
      >
        <StaticImage
          className="sidebar-nav-icon"
          src="../images/box-archive-solid.svg"
          alt=""
        />
        <div className="sidebar-nav-name">
          Archive
        </div>
      </Link>
      <Link
        className="sidebar-nav-item"
        to="/projects"
      >
        <StaticImage
          className="sidebar-nav-icon"
          src="../images/gear-solid.svg"
          alt=""
        />
        <div className="sidebar-nav-name">
          Projects
        </div>
      </Link>
      <Link
        className="sidebar-nav-item"
        to="/links"
      >
        <StaticImage
          className="sidebar-nav-icon"
          src="../images/link-solid.svg"
          alt=""
        />
        <div className="sidebar-nav-name">
          Links
        </div>
      </Link>
      <Link
        className="sidebar-nav-item"
        to="/about"
      >
        <StaticImage
          className="sidebar-nav-icon"
          src="../images/user-solid.svg"
          alt=""
        /> 
        <div className="sidebar-nav-name">
          About
        </div>
      </Link>
    </div>
    <div className="sidebar-link">
      <div className="sidebar-link-header">
        Contact 
      </div>
      <div className="sidebar-link-item">
        <StaticImage
          className="sidebar-link-icon"
          src="../images/github-brands.svg"
          alt=""
        />
      </div>
      <div className="sidebar-link-item">
        <StaticImage
          className="sidebar-link-icon"
          src="../images/linkedin-in-brands.svg"
          alt=""
        />
      </div>
    </div>
    <div className="sidebar-mod">
      <StaticImage
        className="sidebar-mod-icon"
        src="../images/moon-solid.svg"
        alt=""
      />
    </div>
  </div>
)

export default Sidebar;