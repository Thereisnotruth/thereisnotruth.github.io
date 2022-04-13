import Component from "../core/Component.js";

export default class Sidebar extends Component {
  template() {
    return `
      <div id="sidebar-header">
        profile
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