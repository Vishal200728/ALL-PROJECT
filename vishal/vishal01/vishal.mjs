// vishal.js (or vishal.mjs)

import path from "path";

// Join a folder and file name
const fullPath = path.join("/path", "vishal.java");
console.log("files join =", fullPath);

// Get the absolute path of the current working directory
const absolutePath = path.resolve();
console.log("absolute path =", absolutePath);
