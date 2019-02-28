const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const empRouters = require("./routes/employees");

const app = express();

mongoose.connect("mongodb+srv://mean:" + process.env.MONGO_ATLAS_PW + "@cluster0-zxc4i.mongodb.net/node-angular", { useNewUrlParser: true })
.then(() => {
  console.log('Connected to database!');
}).catch(
  (err)=> console.error(err)
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});


app.use("/api/employees", empRouters);
module.exports = app;
