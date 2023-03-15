
const path = require('path');
const router = require('express').Router();
const fs = require('fs');
const { v4: uuid} = require("uuid");

// POST Route for notes page
router.post('/notes', (req, res) =>{
    const newNote = req.body
    newNote.id=uuid()

    try {
        let rawdata = fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")
        let noteArray = JSON.parse(rawdata)
        noteArray.push(newNote)

        const fileDb = path.join(__dirname, "../db/db.json")
        fs.writeFileSync(fileDb, JSON.stringify(noteArray))
        res.json(newNote)
    } catch (err) {
        console.error(err)
    }
 }); 

 router.delete("/notes/:id", (req, res) => {
    const id = req.params.id;
    let rawdata = fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")
    console.log ("rawdata ", rawdata);
    let noteArray = JSON.parse(rawdata)
    if (noteArray.length>0){
        const found=noteArray.some(note=>note.id!==id)
        if (found){
            newNoteArray=noteArray.filter(note=>note.id!==id)
            const fileDb = path.join(__dirname, "../db/db.json")
            fs.writeFileSync(fileDb, JSON.stringify(newNoteArray))
            console.log('Deleted id ', id);
            res.json(newNoteArray)
        }
    }
    });
 
 module.exports = router;