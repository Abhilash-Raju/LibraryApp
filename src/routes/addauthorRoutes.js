const express = require("express");
const Authordata = require("../model/Authordata");
const addauthorRouter =express.Router();
function router(nav){
    
    // Add Author Routing
    addauthorRouter.get('/',(req,res)=>{
        res.render("addAuthor",{nav,
        title:'Add Author'});
    });
    
    addauthorRouter.post('/add',(req,res)=>{
        // res.send("Hi I am Added")
       let item = {
           title: req.body.title,
           image: req.body.image,
           about: req.body.about
        } 
    let author= Authordata(item);
    author.save(); //Saving in Database
    res.redirect("/authors"); //Redirecting to Books page once new book is added
    });

    
    return addauthorRouter
}

module.exports =router;