"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{9682:function(t,e,n){var a=n(7294);e.Z=function(t){var e=t.children,n=t.frontmatter,r=t.size;return a.createElement("div",{className:"list-card",style:{height:r}},a.createElement("h2",null,n.title),a.createElement("div",{className:"list-card-content"},e),a.createElement("div",{className:"list-card-date"},n.date),a.createElement("div",{className:"list-card-category"},n.category))}},9571:function(t,e,n){var a=n(7294);e.Z=function(t){for(var e=t.total,n=t.limit,r=t.page,l=t.line,i=t.setPage,c=t.setLine,s=Math.ceil(e/n),o=[],u=0,m=1;m<=s;m++)m%10==1&&o.push([]),o[u].push(m),m%10==0&&u++;var d=function(t,e){document.getElementsByClassName("right")[0].scrollTo(0,0),c(t),i(e)};return a.createElement("div",{className:"pagination"},a.createElement("button",{className:"pagination-button-tofirst",onClick:function(){return d(1,1)},disabled:1===r},"First"),a.createElement("button",{className:"pagination-button",onClick:function(){return d(l-1,10*(Math.ceil(r/10)-1))},disabled:1===l},"<"),o[l-1].map((function(t){return a.createElement("button",{className:"pagination-button",key:t+1,onClick:function(){return d(l,t)},"aria-current":r===t?"page":null},t)})),a.createElement("button",{className:"pagination-button",onClick:function(){return d(l+1,10*Math.ceil(r/10)+1)},disabled:l===o.length},">"),a.createElement("button",{className:"pagination-button-tolast",onClick:function(){return d(o.length,s)},disabled:r===s},"Last"))}},6558:function(t,e,n){n.r(e);var a=n(7294),r=n(1597),l=n(1807),i=n(9682),c=n(9571);e.default=function(t){var e=t.data,n=a.useState(1),s=n[0],o=n[1],u=a.useState(1),m=u[0],d=u[1],f=10*(s-1),g=e.allMdx.nodes.sort((function(t,e){return Number(t.frontmatter.idx)>Number(e.frontmatter.idx)?-1:1}));return a.createElement(l.Z,null,g.slice(f,f+10).map((function(t,e){return a.createElement(r.Link,{className:"link",to:t.slug,key:e},a.createElement(i.Z,{frontmatter:t.frontmatter},t.excerpt))})),a.createElement(c.Z,{total:g.length,limit:10,page:s,line:m,setPage:o,setLine:d}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-64ffc97dcb2e7b9f4de3.js.map