const mongoose = require('mongoose')

const data = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        age:String
    }

})

module.exports = mongoose.model("user",data)

// by default mongodb acces user in plural and lowercase