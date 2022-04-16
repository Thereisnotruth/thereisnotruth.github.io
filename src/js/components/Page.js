import Component from "../core/Component.js";
import Home from "./pages/Home.js";

export default class Page extends Component {
  template() {
    return `
      <div data-component="home" id="home"></div>
    `;
  }
  
  mounted() {
    const $home = this.$target.querySelector('[data-component="home"]');

    new Home($home, {});
  }
}