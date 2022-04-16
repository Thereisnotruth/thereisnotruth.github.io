import Component from "./core/Component.js";
import Searchbar from "./components/Searchbar.js";
import Sidebar from "./components/Sidebar.js";
import Page from "./components/Page.js";

export default class App extends Component {
  template() {
    return `
    <div id="wrapper">
      <aside data-component="sidebar"></aside> 
      <div id="content">
        <div data-component="searchbar" id="searchbar"></div>
        <div data-component="page" id="page"></div>
      </div>
    </div>
    `;
  }
  mounted() {
    const $sidebar = this.$target.querySelector('[data-component="sidebar"]');
    const $searchbar = this.$target.querySelector('[data-component="searchbar"]');
    const $page = this.$target.querySelector('[data-component="page"]');

    new Sidebar($sidebar, {});
    new Searchbar($searchbar, {});
    new Page($page, {});
  }
}
