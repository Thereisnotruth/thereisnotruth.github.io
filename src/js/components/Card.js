import Component from "../core/Component.js";

export default class Card extends Component {
  template() {
    return `
      <div class="card" style="width:${this.$props.width}; height:${this.$props.height};">
        ${this.$props.content}
      </div>
    `;
  }
}