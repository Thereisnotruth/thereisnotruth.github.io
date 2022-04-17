const path = require("path");
const fs = require("fs");
const hljs = require("highlight.js");
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

const directoryPath = path.join(__dirname, "posts");
console.log(directoryPath);

const contentFiles = fs.readdirSync(directoryPath);
console.log(contentFiles);

contentFiles.map((file) => {
  const body = fs.readFileSync(`./posts/${file}`, "utf8");
  const convertedBody = md.render(body);
  console.log(convertedBody);
});