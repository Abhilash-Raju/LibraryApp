const express = require('express'); 
const signupRouter = express.Router();
const users = require('../data/user');
const {Signupdata} = require("../model/Signupdata");
let alert = require('alert'); 
const { default: mongoose } = require('mongoose');

function router(nav){
signupRouter.get('/',function(req,res){

    res.render('signup',{nav,title:'Sign Up'});
    
})

signupRouter.get("/adduser",function(req,res){
    
    let adduser = {
        "_id":new mongoose.Types.ObjectId(),
        "userid":req.param("userid"),
        "pwdid":req.param("pwdid")
    };

    alert('Hi');
    let newuser = Signupdata(adduser);
    newuser.save(); //Saving in Database

    users.push(adduser); //Saving in local user.js file in data folder
    console.log(users);
    res.redirect("/login");
    })
    return signupRouter
}

module.exports = router;