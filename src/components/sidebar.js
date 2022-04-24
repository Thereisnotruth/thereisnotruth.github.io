import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import sidebarStyles from "../styles/sidebar.css"

const Sidebar = () => (
  <nav>
    <div id="sidebar-header">
      <img id="sidebar-profile-img" src="static/img/profile.png" /> 
      <div id="sidebar-profile-name">
        고태진
      </div>
      <div id="sidebar-profile-intro">
        개발자
      </div>
    </div>
    <hr color="#eeeeee" />
    <div id="sidebar-nav">
      <div className="sidebar-nav-item">
        <StaticImage
          className="sidebar-nav-icon"
          alt=""
          src="../images/house-solid.svg"
        />
        <a
          href="/"
          className="sidebar-nav-name"
          data-link
        >
          Home
        </a>
      </div>
      <div className="sidebar-nav-item">
        <StaticImage
          className="sidebar-nav-icon"
          alt=""
          src="../images/pen-to-square-solid.svg"
        />
        <a
          href="/blog"
          className="sidebar-nav-name"
          data-link
        >
          Blog
        </a>
      </div>
      <div className="sidebar-nav-item">
        <StaticImage
          className="sidebar-nav-icon"
          src="../images/box-archive-solid.svg"
        />
        <a
          href="/archive"
          className="sidebar-nav-name"
          data-link
        >
          Archive
        </a>
      </div>
      <div className="sidebar-nav-item">
        <StaticImage
          className="sidebar-nav-icon"
          src="../images/gear-solid.svg"
        />
        <a
          href="/projects"
          className="sidebar-nav-name"
          data-link
        >
          Projects
        </a>
      </div>
      <div className="sidebar-nav-item">
        <StaticImage
          className="sidebar-nav-icon"
          src="../images/link-solid.svg"
        />
        <a
          href="/links"
          className="sidebar-nav-name"
          data-link
        >
          Links
        </a>
      </div>
      <div className="sidebar-nav-item">
        <StaticImage
          className="sidebar-nav-icon"
          src="../images/user-solid.svg"
        /> 
        <a
          href="/about"
          className="sidebar-nav-name"
          data-link
        >
          About
        </a>
      </div>
    </div>
    <div id="sidebar-link">
      <div id="sidebar-link-header">
        Contact 
      </div>
      <div id="sidebar-link-item">
        <StaticImage
          className="sidebar-link-icon"
          src="../images/github-brands.svg"
        />
      </div>
      <div id="sidebar-link-item">
        <StaticImage
          className="sidebar-link-icon"
          src="../images/linkedin-in-brands.svg"
        />
      </div>
    </div>
    <div id="sidebar-mod">
      <StaticImage
        id="sidebar-mod-icon"
        src="../images/moon-solid.svg"
      />
    </div>
  </nav>
)

export default Sidebar;