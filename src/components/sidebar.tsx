import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/sidebar.css"

const Sidebar = () => (
  <aside className="sidebar" aria-label="Profile and site navigation">
    <div className="sidebar-header">
      <StaticImage
        className="sidebar-profile-img"
        src="../images/profile.png"
        alt=""
      /> 
      <div className="sidebar-profile-name">
        단서
      </div>
      <div className="sidebar-profile-intro">
        thereisnotruth
      </div>
      <div className="sidebar-profile-intro">
        고태진
      </div>
    </div>
    <div className="sidebar-link">
      <div className="sidebar-link-header">
        <hr className="sidebar-link-header-item" style={{float: "left"}}/>
        <div className="sidebar-link-header-item">
          Contact 
        </div>
        <hr className="sidebar-link-header-item" style={{float: "right"}}/>
      </div>
      <div>
        <div className="sidebar-link-item">
          <a
            href="https://github.com/Thereisnotruth"
            target="_blank"
            rel="noreferrer"
          >
            <span
              className="sidebar-link-icon sidebar-icon sidebar-icon-github"
              aria-label="github"
            />
          </a>
        </div>
        <div className="sidebar-link-item">
          <a
            href="https://www.linkedin.com/in/%ED%83%9C%EC%A7%84-%EA%B3%A0-76574b199/"
            target="_blank"
            rel="noreferrer"
          >
            <span
              className="sidebar-link-icon sidebar-icon sidebar-icon-linkedin"
              aria-label="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
    <nav className="sidebar-nav" aria-label="Primary navigation">
      <Link
        className="sidebar-nav-item"
        to="/"
      >
        <span className="sidebar-nav-icon sidebar-icon sidebar-icon-home" aria-hidden="true" />
        <div className="sidebar-nav-name">
          Home
        </div>
      </Link>
      <Link
        className="sidebar-nav-item"
        to="/categories/"
      >
        <span className="sidebar-nav-icon sidebar-icon sidebar-icon-categories" aria-hidden="true" />
        <div className="sidebar-nav-name">
          Categories
        </div>
      </Link>
      <Link
        className="sidebar-nav-item"
        to="/archive/"
      >
        <span className="sidebar-nav-icon sidebar-icon sidebar-icon-archive" aria-hidden="true" />
        <div className="sidebar-nav-name">
          Archive
        </div>
      </Link>
      <Link
        className="sidebar-nav-item"
        to="/about/"
      >
        <span className="sidebar-nav-icon sidebar-icon sidebar-icon-about" aria-hidden="true" />
        <div className="sidebar-nav-name">
          About
        </div>
      </Link>
    </nav>
  </aside>
)

export default Sidebar;
