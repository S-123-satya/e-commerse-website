const express=require('express')
const router=express.Router()

router.get('/admin',(req,res)=>{
    res.send('<h5>admin router<h5>')
})
module.exports=router;