import Component from "./core/Component.js";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";

export default class App extends Component {
  template() {
    return `
    <aside data-component="sidebar"></aside> 
    `;
  }
  mounted() {
    const $test1 = this.$target.querySelector('[data-component="sidebar"]');

    new Sidebar($test1, {});
  }
}
