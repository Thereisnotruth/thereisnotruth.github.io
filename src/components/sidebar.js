import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
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
      <div class="sidebar-nav-item">
        <img class="sidebar-nav-icon" src="static/img/house-solid.svg" />
        Home
      </div>
      <div class="sidebar-nav-item">
        <img class="sidebar-nav-icon" src="static/img/pen-to-square-solid.svg" />
        <a href="/blog" data-link>Blog</a>
      </div>
      <div class="sidebar-nav-item">
        <img class="sidebar-nav-icon" src="static/img/box-archive-solid.svg" />
        Archieve
      </div>
      <div class="sidebar-nav-item">
        <img class="sidebar-nav-icon" src="static/img/gear-solid.svg" />
        Projects
      </div>
      <div class="sidebar-nav-item">
        <img class="sidebar-nav-icon" src="static/img/link-solid.svg" />
        Links
      </div>
      <div class="sidebar-nav-item">
        <img class="sidebar-nav-icon" src="static/img/user-solid.svg" />
        About
      </div>
    </div>
    <div id="sidebar-link">
      <div id="sidebar-link-header">
       Contact 
      </div>
      <div id="sidebar-link-item">
        <img class="sidebar-link-icon" src="static/img/github-brands.svg" />
      </div>
      <div id="sidebar-link-item">
        <img class="sidebar-link-icon" src="static/img/linkedin-in-brands.svg" />
      </div>
    </div>
    <div id="sidebar-mod">
      <img id="sidebar-mod-icon" src="static/img/moon-solid.svg" />
    </div>
  </nav>
)

export default Sidebar;