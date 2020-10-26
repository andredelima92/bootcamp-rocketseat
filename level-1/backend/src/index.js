const express = require("express");

const app = express();

app.use(express.json());

app.get("/projects", (req, res) => {
  const query = req.query;

  return res.json(query);
});

app.post("/projects", (req, res) => {
  return res.json(req.body);
});

app.put("/projects/:id", (req, res) => {
  const params = req.params;

  return res.json(params);
});

app.delete("/projects/:id", (req, res) => {
  return res.json(["Projeto 2", "Projeto 3"]);
});

app.listen(3333, () => {
  console.log("Server is Online");
});
