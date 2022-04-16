import Component from "../core/Component.js";

export default class Searchbar extends Component {
  template() {
    return `
      <div id="searchbar-button">
       <img id="searchbar-icon" src="src/img/magnifying-glass-solid.svg">
      </div>
    `;
  }
}