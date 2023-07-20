const express=require('express')
const router=express.Router()

router.get('/admin/home',(req,res)=>{
    res.send('<h5>admin router<h5>')
})
router.get('/admin/add-product',(req,res)=>{
    res.send('<h5>admin add product<h5>')
})
router.get('/admin/update-product',(req,res)=>{
    res.send('<h5>admin update product<h5>')
})
router.get('/admin/delete-product',(req,res)=>{
    res.send('<h5>admin delete product<h5>')
})
router.get('/admin/dark-mode',(req,res)=>{
    res.send('<h5>admin darkmode<h5>')
})
router.get('/admin/logout',(req,res)=>{
    res.send('<h5>admin logout<h5>')
})
module.exports=router;