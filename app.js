const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "posts");
console.log(directoryPath);

const contentFiles = fs.readdirSync(directoryPath);
console.log(contentFiles);