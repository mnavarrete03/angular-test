const { Router } = require('express');
const users=require('./auth-controller');
module.exports=(router)=>{
    router.post('/create',users.create);
    router.post('/login',users.login);
}