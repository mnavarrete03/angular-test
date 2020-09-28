const mongoose=require('mongoose');
const dbUrl=require('./props').DB;

module.exports=()=>{
    mongoose.connect(dbUrl,{useNewUrlParser:true})
    .then(()=>console.log('Mongo on'))
    .catch(error=>console.log("Connection error"))

    process.on('SIGINT',()=>{
        mongoose.connection.close(()=>{
            console.log("Mongo off");
            process.exit(0);
        })
    })

    
}