const express=require('express')
const router=express.Router()

router.get('/customer',(req,res)=>{
    res.send('<h5>customer router<h5>')
})
module.exports=router;