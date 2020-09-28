'use strict'
const express=require('express');
const app=express();

const bodyParser=require('body-parser');
const authRoutes=require('./auth/auth-routes');
const props=require('./config/props');
const DB=require('./config/db');

const router= express.Router();
const bodyParserJSON=bodyParser.json();
const bodyParserURLEncoded=bodyParser.urlencoded({extended:true});

DB();
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use('/api',router);
authRoutes(router);
router.get('/',(req,res)=>{
    res.send("WELCOME");
});
app.use(router);
app.listen(props.PORT,()=>console.log('Server running on '+props.PORT));
