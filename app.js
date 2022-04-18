const path = require("path");
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

const layoutHtmlFormat = fs.readFileSync(
  "./templates/layout_format.html",
  "utf-8"
);

const postHtmlFormat = fs.readFileSync(
  "./templates/post_format.html",
  "utf8"
);

const directoryPath = path.join(__dirname, "posts");

const dir = "./deploy";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
const contentFiles = fs.readdirSync(directoryPath);
console.log(contentFiles);

// deploy 폴더 안에 넣은 파일 리스트
const deployFiles = [];

// posts 폴더 내의 파일들을 돌면서 deploy안에 html파일 생성
contentFiles.map((file) => {
  const body = fs.readFileSync(`./posts/${file}`, "utf8");
  const convertedBody = md.render(body);
  const postContent = ejs.render(postHtmlFormat, {
    body: convertedBody
  });
  const postHtml = ejs.render(layoutHtmlFormat, {
    content: postContent
  });
  const fileName = getHtmlFileName(file);
  fs.writeFileSync(`./deploy/${fileName}.html`, postHtml);
  deployFiles.push(fileName);
});



// 포스트 html 파일 생성 코드
function getHtmlFileName(file) {
  return file.slice(0, file.indexOf(".")).toLowerCase();
}





