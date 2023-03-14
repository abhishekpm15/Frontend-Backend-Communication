const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const path = require("path");
require('dotenv').config();
mongoose.set('strictQuery', false);
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tn0wwt0.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

const dataSchema = new mongoose.Schema({
  name: String,
  pass: String,
});

const model = mongoose.model("data", dataSchema);

app.use(bodyparser.json());
app.use(helmet());
app.use(morgan("combined"));
app.use(cors());

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/api", (req, res) => {
  console.log(req.body);
  res.send(req.body);
  const data = new model(req.body);
  data
    .save()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error occurred ", error);
    });
});

app.patch("/modify-api/:_id", (req, res) => {
  console.log(req.body);
  res.send(req.body);
  const data = model.findByIdAndUpdate(req.params._id, req.body, {
    new: true,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("error occurred ", error);
    });
});

//fetch using slug value

// app.get("/api-data/:value", (req, res) => {
//   console.log(req.params.value);
//   res.send(req.params.value);
// });

app.get("/get-data", (req, res) => {
  model
    .find()
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/get-data/:_id", (req, res) => {
  model
    .findById(req.params._id)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});


app.delete("/delete-data/:_id", (req, res) => {
  model
    .findByIdAndDelete(req.params._id)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.log(error);
    });
});