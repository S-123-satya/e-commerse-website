const express=require('express')
const router=express.Router()

router.get('/auth',(req,res)=>{
    res.send('<h5>auth router<h5>')
})
router.post('/auth',(req,res)=>{
    res.send('<h5>auth post router<h5>')
})
module.exports=router;