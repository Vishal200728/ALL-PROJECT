import express from "express";
import path from "path";

const app = express();

let product = [
  {title: "iphone-16", price: 150000},
  {title: "samsungs24", price: 150000}
]

app.use(express.static(path.join(path.resolve(), "public")));

app.get("/", (req, res) => {
  let name = "vishal";
  res.render("index.ejs", {name, product});
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on address http://localhost:${port}`);
});



