const express = require('express');
const router = express.Router();






router.get('/', (req, res)=>{
    console.log('form page');
    res.render('index')
  
    
})


router.post('/new', (req, res)=>{
   

   
    
})



module.exports = router;
