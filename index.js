const express = require('express');

const app= express();

const homeRouter=require('./routes/home');
const errorRouter=require('./routes/error');
const customerRouter=require('./routes/customer');
const authRouter=require('./routes/auth');
const adminRouter=require('./routes/admin');

app.use(homeRouter);
app.use(adminRouter);
app.use(customerRouter);
app.use(authRouter);
// error routing
app.use(errorRouter);

app.listen(3000,()=>{
    console.log('listening on port no 3000');
})