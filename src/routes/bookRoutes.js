const express = require("express");
const Bookdata = require("../model/Bookdata");
const booksRouter =express.Router();
function router(nav){
        
    booksRouter.get('/',(req,res)=>{
        Bookdata.find()
        .then(function(books){
            res.render("books",{nav,
            title:'Books',
            books});
        })

    });
    
    booksRouter.get('/:id',(req,res)=>{
        const id =req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){

            res.render("book",{nav,

            title:"Book",
            book});
        })
    });
    return booksRouter
}

module.exports =router;