const path = require('path');
const router = require('express').Router();
const fs = require('fs');

router.get("/api/notes", (req, res) => {
  try{
    const data = fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")
    //console.log(data);
    res.send(data)
  } catch (err) {
    console.error(err)
  }
})

router.get("/notes", (req,res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"))
})

router.get("*",(req,res) => {
res.sendFile(path.join(__dirname,'../public/index.html'))
})

module.exports = router;