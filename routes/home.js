const express = require('express')
const router = express.Router();

const {homeController} = require('./../controllers/home');

router.get('/',homeController);
router.get('/admin-login',(req, res, next) => {
    res.send('<h2>home admin login router<h2>');
});
router.get('/customer-login',(req, res, next) => {
    res.send('<h2>home customer login router<h2>');
});
router.get('/dark-mode',(req, res, next) => {
    res.send('<h2>home dark mode router<h2>');
});
router.get('/registration',(req, res, next) => {
    res.send('<h2>home regisratation router<h2>');
});

module.exports= router;
