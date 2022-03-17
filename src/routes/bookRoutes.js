const express = require("express");
const Bookdata = require("../model/Bookdata");
const booksRouter =express.Router();
function router(nav){
    // var books = [
    //     {
    //         title: "Family",
    //         author:"Raju",
    //         genre:"Drama",
    //         image: "Fam.jpg"
    //     },
    //     {
    //         title: "Amma",
    //         author:"Usha",
    //         genre:"Love",
    //         image: "Amma.jpg"
    //     },
    //     {
    //         title: "Lights",
    //         author:"Annu and Unni",
    //         genre:"Celebration",
    //         image: "Lights.jpg"
    //     }
    // ];
    
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