import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import cors from "cors";
import dataSet1 from "./data/DataSet1.js";
import dataSet2 from "./data/DataSet2.js";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working!");
});

app.get("/data", (req, res) => {
  try {
    res.json({
      dataSet1,
      dataSet2,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/dataSet1", (req, res) => {
  try {
    res.json({
      dataSet1,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get("/dataSet2", (req, res) => {
  try {
    res.json({
      dataSet2,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
