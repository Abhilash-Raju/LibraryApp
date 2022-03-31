const express = require("express");
const Bookdata = require("../model/Bookdata");
const addbookRouter =express.Router();
function router(nav){

    // Add-Book Routing
    addbookRouter.get('/',(req,res)=>{
        res.render("addBook",{nav,
        title:'Add Book'});
    });
    
    addbookRouter.post('/add',(req,res)=>{
    
    // res.send("Hi I am Added")
       let item = {
           title: req.body.title,
           image: req.body.image,
           about: req.body.about
        } 
    let book= Bookdata(item);
    book.save(); //Saving in Database
    res.redirect("/books"); //Redirecting to Books page once new book is added
    });

    return addbookRouter
}

module.exports =router;