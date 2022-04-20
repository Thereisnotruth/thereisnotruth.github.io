export default class Component {
  $target;
  $props;
  $state;
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.render();
    this.mounted();
  }
  setup() {}
  mounted() {}
  template() { return ``; }
  render() { this.$target.innerHTML = this.template(); }
  setState(newState) {
    this.$state = {
      ...this.$state,
      ...newState
    };
    this.render();
    this.mounted();
    this.updated();
  }
  updated() {}
}