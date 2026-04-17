const path = require("path");

const fullPath = path.join("/path", "vishal.java");
console.log("files join =", fullPath);

const absolutePath = path.resolve();
console.log("absolute path =", absolutePath);
