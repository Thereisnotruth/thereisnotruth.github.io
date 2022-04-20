import Component from "../../core/Component.js";
import Card from "../Card.js";

export default class Blog extends Component {
  template() {
    return `
      <div data-component="intro-card"></div>
    `;
  }

  mounted() {
    const $intro_card = this.$target.querySelector('[data-component="intro-card"]');

    new Card($intro_card, {
      width: "400px",
      height: "300px",
      content: "Blog"
    });
  }
}