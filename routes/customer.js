const express=require('express')
const router=express.Router()

router.get('/customer/home',(req,res)=>{
    res.send('<h5>customer home router<h5>')
})
router.get('/customer/cart',(req,res)=>{
    res.send('<h5>customer cart router<h5>')
})
router.get('/customer/dark-mode',(req,res)=>{
    res.send('<h5>customer dark mode router<h5>')
})
router.get('/customer/logout',(req,res)=>{
    res.send('<h5>customer logout router<h5>')
})
module.exports=router;