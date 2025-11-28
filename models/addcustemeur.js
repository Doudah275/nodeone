const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const theuser = new Schema({
    firstname:String,
    lastname:String,
    email:String,
    phoneNumber:String,
    Age:Number,
    Country:String,
    gender:String,

},{ timestamps: true });

// Create a model based on that schema
const user = mongoose.model("customer", theuser);

// export the model
module.exports = user;
