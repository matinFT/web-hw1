const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

// Enable CORS for a Single Route
app.get("/getData", (req, res) => {
 res.send('Hello World!')
});

// Configuring CORS
var corsOptions = {
  origin: `http://localhost:${port}`,
  // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get("/getData", (req, res) => {
  res.json({
    result: data,
  });
  // res.send('Hello World!')
});

app.post("/addNew", (req, res) => {
  data.push({ id: data.length+1, name: `n${data.length+1}` });
  res.write("ok");
});

app.post("/nodejs/sha-256", (req,res) => {
    res.json({
        result:"my nodejs sha256"
    })
})

app.post("/golang/sha-256", (req,res) => {
    res.json({
        result:"my golang sha256"
    })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
