// const express = require("express");
// const app = express();
// const PORT = 2000;

// app.get("/", (req, res) => {
//   res.send("Hello Vishal"); 
// });


// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);
// });

const http = require("http");

http.createServer((req, resp) => {
  resp.writeHead(200, { "Content-Type": "text/plain" });
  resp.end("Hello World");
}).listen(4900, () => {
  console.log("Server running on http://localhost:4900");
});
