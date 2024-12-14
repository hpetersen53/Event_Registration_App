const express = require('express');
const router = express.Router();

const fs = require('fs')
let rawdata = fs.readFileSync("./api/data/tickets_db.json");
let ticket = JSON.parse(rawdata);

router.get('/', (req, res) => {
   res.render("registrations");
})

router.get('/view_all', (req, res) => {
   let outputJSON = {
      tickets : ticket["tickets"]
   }
   res.json(outputJSON);
})

router.get('/by_name/:lname', (req, res) => {
   let query = req.params['lname']
   filtered_tickets = ticket["tickets"].filter(q => q.lname.includes(query))
   
   let outputJSON = {
      tickets : filtered_tickets
   }

   res.json(outputJSON);
})

router.get('/by_event/:event', (req, res) => {
   let query = req.params['event']
   filtered_tickets = ticket["tickets"].filter(q => q.event.includes(query))
   
   let outputJSON = {
      tickets : filtered_tickets
   }

   res.json(outputJSON);
})

router.get('/cancel/:id', (req, res) => {

})


module.exports = router;

