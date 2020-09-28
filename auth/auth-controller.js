const user=require('./auth-view');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const { error } = require('console');
const SECRET_KEY='sk123456';

exports.create=(req,res,next)=>{
    const newUser={
        name:req.body.name,
        username:req.body.username,
        password:req.body.password,
    }

    user.create(newUser,(error,user)=>{
        if(error) return res.estatus(500).send('Server error 500');
        const expiresIn=60000;
        const accessToken=jwt.sign({id:user.id},
        SECRET_KEY,{expiresIn});
        res.send({user});
    });
}

exports.login=(req,res,next)=>{
    const userData={
        username:req.body.username,
        password:req.body.password,
    }
    user.findOne({username:userData.username},(error,user)=>{
        if(error) return res.estatus(500).send('Server error 500');
        if(!user){
            res.estatus(409).send({message:'Oops!'});
        }else{
            const resultPassword=userData.password;
            if(resultPassword){
                const expiresIn=60000;
                const accessToken=jwt.sign({id:user.id},SECRET_KEY,{expiresIn:expiresIn});
                res.send({userData});
            }else{
                res.estatus(409).send({message:'Oops!'});
            }
        }
    });
}