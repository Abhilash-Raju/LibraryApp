const express = require("express");
const Bookdata = require("../model/Bookdata");
const adminRouter =express.Router();

function router(nav){
           
    adminRouter.get('/',(req,res)=>{
        res.render("addBook",{nav,
        title:'Add Books'});
    });


    adminRouter.post('/add',(req,res)=>{
        // res.send("Hi I am Added")
       let item = {
           title: req.body.title,
           author: req.body.author,
           genre: req.body.genre,
           image: req.body.image
    } 
    let book= Bookdata(item);
    book.save(); //Saving in Database
    res.redirect("/books"); //Redirecting to Books page once new book is added
    });
    return adminRouter
}

module.exports =router;