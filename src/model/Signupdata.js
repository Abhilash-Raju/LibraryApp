// Accessing Mongoose Package
const mongoose = require("mongoose");
// Creating Database connection
mongoose.connect("mongodb+srv://Abhilash:1289lash@abhicluster.zckzz.mongodb.net/LibraryApp?retryWrites=true&w=majority");
// mongoose.connect("mongodb://localhost:27107/Library");

// Schema Definition from Mongoose.Schema package
const Schema1 = mongoose.Schema;
// const bcrypt = require('bcrypt');

// Creating a new Schema named SignupSchema using constructor Schema
const SignupSchema = new Schema1({
    _id: mongoose.Schema.Types.ObjectId,
    userid: {type: String,required:true },
    pwdid: {type: String,required:true }
});

// hash the password
// SignupSchema.methods.generateHash = function(pwdid) {
//     return bcrypt.hashSync(pwdid, bcrypt.genSaltSync(8), null);
//   };
  
  // checking if password is valid
  // SignupSchema.methods.validPassword = function(pwdid) {
  //   return bcrypt.compareSync(pwdid, this.pwdid);
  // };

// In order to use the new Schema created we need to create a Model using mongoose.model package ("Collection Name", "Schema Name")
const Signupdata = mongoose.model("signupdata",SignupSchema);

// Exporting the Model created (Signupdata)
module.exports = {Signupdata};