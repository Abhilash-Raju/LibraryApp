const express = require("express");
const Authordata = require("../model/Authordata");
const authorRouter =express.Router();
function router(nav){
   
    // All the Authors Routing    
    authorRouter.get('/',(req,res)=>{
        Authordata.find()
        .then(function(authors){
            res.render("authors",{nav,
            title:'Authors',
            authors});
        })

        
    });
   
    // Single Author Routing
    authorRouter.get('/:id',(req,res)=>{
        const id =req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",{nav,
            title:"Author",
            author});
        })
    });
    // authorRouter.get('/:id',(req,res)=>{
    //     const id =req.params.id;
    //     res.render("author",{nav,
    //     title:'Author',
    //     author:authors[id]});
    // })

    // // Add Author Routing
    // authorRouter.get('/',(req,res)=>{
    //     res.render("addAuthor",{nav,
    //     title:'Add Author'});
    // });
    
    // authorRouter.post('/add',(req,res)=>{
    //     // res.send("Hi I am Added")
    //    let item = {
    //        title: req.body.title,
    //        image: req.body.image,
    //        about: req.body.about
    //     } 
    // let author= Authordata(item);
    // author.save(); //Saving in Database
    // res.redirect("/authors"); //Redirecting to Books page once new book is added
    // });
    return authorRouter
}

module.exports =router;