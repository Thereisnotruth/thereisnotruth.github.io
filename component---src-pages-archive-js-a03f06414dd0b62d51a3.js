"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[527],{5790:function(e,a,t){t.r(a);var r=t(7294),l=t(1597),n=t(7512);a.default=function(e){var a=e.data,t={},c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];a.allMdx.nodes.map((function(e){console.log(e);var a=e.frontmatter.date.split(".")[0],r=e.frontmatter.date.split(".")[1],l=e.frontmatter.date.split(".")[2];void 0===t[a]?(t[a]={},t[a][r]={},t[a][r][l]=[e]):null==t[a][r]?(t[a][r]={},t[a][r][l]=[e]):void 0===t[a][r][l]?t[a][r][l]=[e]:t[a][r][l].push(e)})),console.log(t);return r.createElement(n.Z,null,r.createElement("div",{className:"card"},r.createElement("h2",null,"Archive"),r.createElement("div",{className:"archive"},function(){var e=[];for(var a in t)for(var n in e.push(r.createElement("div",{className:"archive-year",key:a},a)),t[a])for(var s in e.push(r.createElement("div",{className:"archive-month",key:n},c[n-1])),t[a][n])e.push(r.createElement("div",{className:"archive-day",key:s},s)),t[a][n][s].map((function(a,t){0!==t&&e.push(r.createElement("div",{className:"archive-day",key:t})),e.push(r.createElement(l.Link,{className:"link",to:"../"+a.slug},r.createElement("div",{className:"archive-title",key:a.frontmatter.idx},a.frontmatter.title)))}));return e}())))}}}]);
//# sourceMappingURL=component---src-pages-archive-js-a03f06414dd0b62d51a3.js.map