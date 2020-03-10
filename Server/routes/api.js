const express = require ('express');
const router = express.Router();

const smooper = require ("../models/smooper");

const mongoose = require ('mongoose');
const db = "mongodb://localhost:27017/smooper";

mongoose.connect(db, (err) => {
  if (err)
    console.log("Error! "+err);
  else
    console.log("connected to mongodb");
});


router.get ('/', (req, res) => {
  res.send("From API Route");
});

// Fetching all Contact List
router.get ('/contactslist', (req, res) => {
  smooper.find ((err, data) => {
    if(err)
      console.log (err);
    else
      res.status(200).send(data);
  })
})

// Fetching a particular Contact Details
router.get ('/contactsdetails/:id', (req, res) => {
  let id = parseInt(req.params.id);
  smooper.findOne ({id:id}, (err, data) => {
    if(err)
      console.log (err);
    else
      res.status(200).send(data);
  })
})




module.exports = router;
