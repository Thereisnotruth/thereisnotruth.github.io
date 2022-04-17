import Component from "../core/Component.js";

export default class Card extends Component {
  template() {
    console.log(this.$props);
    return `
      <div id="card">
      </div>
    `;
  }
}