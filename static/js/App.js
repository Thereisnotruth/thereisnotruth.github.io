import Component from "./core/Component.js";
import Router from "./core/Router.js";
import Searchbar from "./components/Searchbar.js";
import Sidebar from "./components/Sidebar.js";
import Home from "./components/pages/Home.js";
import Blog from "./components/pages/Blog.js";
import { u } from "./core/lib.js";

const pathToRegex = (path) => {
  const values = match.result.slice(1);

  const keys = Arrays.from(
    match.round.path
      .matchAll(/:(\w+)/g)
      .map(result => result[1])
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [
        key,
        values[i]
      ];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

export default class App extends Component {
  template() {
    return `
    <div id="wrapper">
      <nav data-component="sidebar"></nav> 
      <div id="content">
        <div data-component="searchbar" id="searchbar"></div>
        <div data-component="home" id="page"></div>
      </div>
    </div>
    `;
  }
  mounted() {
    const $sidebar = this.$target.querySelector('[data-component="sidebar"]');
    const $searchbar = this.$target.querySelector('[data-component="searchbar"]');

    new Sidebar($sidebar, {});
    new Searchbar($searchbar, {});

    const page = document.getElementById("page");
    
    const router = async () => {
      const routes = [
        { path: u("/"), view: Home },
        { path: u("/blog"), view: Blog },
      ];

      const potentialMatches = routes.map((route) => {
        return {
          route: route,
          result: location.pathname.match(pathToRegex(route.path))
        };
      });
      let match = potentialMatches.find((potentialMatch) => potentialMath.result !== null);

      if (!match) {

      } else {
        const view = new match.route.view(getParams(match));
        page.innerHTML = await view.getHtml();
      }
    }
    window.addEventListener('popstate', router);

    document.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
          e.preventDefault();
          navigateTo(e.target.href);
        }
      });

      router();
    });
  }
}
