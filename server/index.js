import express from "express";
const app = express();
import cors from "cors";
import dataSet1 from "./data/DataSet1.js";
import dataSet2 from "./data/DataSet2.js";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working!");
});

app.get("/dataSet1", (req, res) => {
  try {
    res.send(dataSet1);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/dataSet2", (req, res) => {
  try {
    res.send(dataSet2);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
