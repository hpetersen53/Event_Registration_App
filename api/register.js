const express = require('express');
const router = express.Router();



const fs = require('fs')
let rawdata = fs.readFileSync("./api/data/tickets_db.json");
let ticket = JSON.parse(rawdata);


router.get('/', (req, res)=>{
    console.log('form page');
    res.render('index')
  
    
})


router.post('/', (req, res)=>{
   
    const new_ticket = {
        id: ['tickets'].length + 1,
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        event: req.body.event
    }
   
    ticket.push(new_ticket);
    res.redirect(`/registrations`)

})



module.exports = router;
