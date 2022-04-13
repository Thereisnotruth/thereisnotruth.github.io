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
      <div id="sidebar-nav">
        menu
      </div>
      <div id="sidebar-link">
        contact 
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