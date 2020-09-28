'use strict'

const express=require('express');
const app=express();

const authRoutes=require('./auth/auth-routes');
const props=require('./config/props');
const DB=require('./config/db');

const router= express.Router();
DB();
app.use('/api',router);
authRoutes(router);
router.get('/',(req,res)=>{
    res.send("WELCOME");
});
app.use(router);
app.listen(props.PORT,()=>console.log('Server running'));
