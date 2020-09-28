const mongoose=require('mongoose');
const { login } = require('./auth-controller');
const authSchema=require('./auth-model');

authSchema.statics={
    create:function (data,callback) {
        const user=new this(data);
        user.save(callback);
    },
    login:function (data,callback) {
        this.find(data,callback);
    }
}

const authModel= mongoose.model('Users',authSchema);
module.exports=authModel;