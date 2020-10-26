const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
// const fs = require("fs");
const port = 3002;
const nthline = require('nthline');

const multer = require('multer');
const upload = multer();

const shajs = require('sha.js');

// app.set('view engine', 'pug');
// app.set('views', './views');
app.use(cors());
// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//
app.use(upload.array()); 
app.use(express.static('public'));



app.get("/nodejs/write", (req, res) => {
  var line_number = parseInt(req.query["linenumber"]);
  nthline(line_number - 1, "../h1.txt").then((line) => {
    res.json({
      result:line
    })
  })
});

app.get("/write", (req, res) => {
  res.sendFile("E:/MyEd/Sharif/Term 5/WEB/Assignments/HW1/write/Frontend/index.html")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)})