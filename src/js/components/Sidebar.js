import Component from "../core/Component.js";

export default class Sidebar extends Component {
  template() {
    return `
      <div id="sidebar-header">
        <img id="sidebar-profile-img" src="src/img/profile.png"> 
        <div id="sidebar-profile-name">
          고태진
        </div>
        <div id="sidebar-profile-intro">
          개발자
        </div>
      </div>
      <hr color="#eeeeee">
      <div id="sidebar-nav">
        <div class="sidebar-nav-item">
          <img class="sidebar-nav-icon" src="src/img/house-solid.svg">
          Home
        </div>
        <div class="sidebar-nav-item">
          <img class="sidebar-nav-icon" src="src/img/pen-to-square-solid.svg">
          Blog
        </div>
        <div class="sidebar-nav-item">
          <img class="sidebar-nav-icon" src="src/img/box-archive-solid.svg">
          Archieve
        </div>
        <div class="sidebar-nav-item">
          <img class="sidebar-nav-icon" src="src/img/gear-solid.svg">
          Projects
        </div>
        <div class="sidebar-nav-item">
          <img class="sidebar-nav-icon" src="src/img/link-solid.svg">
          Links
        </div>
        <div class="sidebar-nav-item">
          <img class="sidebar-nav-icon" src="src/img/user-solid.svg">
          About
        </div>
      </div>
      <div id="sidebar-link">
        <div id="sidebar-link-header">
         Contact 
        </div>
        <div id="sidebar-link-item">
          <img class="sidebar-link-icon" src="src/img/github-brands.svg">
        </div>
        <div id="sidebar-link-item">
          <img class="sidebar-link-icon" src="src/img/linkedin-in-brands.svg">
        </div>
      </div>
      <div id="sidebar-copyright">
        copyright
      </div>
      <div id="sidebar-mod">
        mod 
      </div>
    `;
  }
}