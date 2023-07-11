const express=require('express')
const router=express.Router()

router.use((req,res)=>{
    res.status(404).send('<h4>You are looking for wrong page')
})

module.exports=router;