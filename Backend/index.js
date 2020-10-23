const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000;

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

app.post("/nodejs/sha-256", (req,res) => {
    var request_json = req.body
    var sum = parseInt(request_json["first_number"], 10) + parseInt(request_json["second_number"], 10)
    var my_hash = shajs('sha256').update(sum.toString()).digest('hex');
    console.log(sum) 
    res.json({
        result:my_hash
    })
})

// app.post("/go/sha-256", (req,res) => {
//     var request_json = req.body
//     var first_number = request_json["first number"]
//     var second_number = request_json["second number"] 
//     console.log(request_json["first_number"])
//     console.log(typeof("hello"))
    
//     res.json({
//         result:1
//     })
// })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
