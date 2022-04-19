import path from "path";
const fs = require("fs");
const hljs = require("highlight.js");
const ejs = require("ejs");
const md = require("markdown-it")({
  html: false,
  xhtmlOut: false,
  breaks: false,
  langPrefix: "language-",
  linkify: true,
  typographer: true,
  quotes: "“”‘’",
  highlight: function(str, lang) {
    if(lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' + 
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch (__) {}
    }
    return (
      '<pre class="hljs"><code>' +
      md.utils.escapeHtml(str) +
      "</code></pre>"
    );
  }
});

export function getIntroContent() {
  const body = fs.readFileSync("../../../posts/intro.md", "utf8");
  const convertedBody = md.render(body);
  return convertedBody; 
}