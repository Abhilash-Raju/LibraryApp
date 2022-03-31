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

    booksRouter.post('/delete', function (req, res) {

        const id = req.body.id;
        console.log(req.body.id);
        Bookdata.findOneAndDelete({ _id: id })
            .then(function () {

                res.redirect('/books')

            })
    })



    //router to edit book
    booksRouter.post('/edit', function (req, res) {
        
        Bookdata.findById(req.body.id, function (err, data) {
            if (err) {
                throw err;
            }
            else {
                res.render('editbook', { nav,data })
            }
        })
    })



    //router to update book
    booksRouter.post('/update', function (req, res) {
        console.log(req.body);
        Bookdata.findByIdAndUpdate(req.body.id, { $set: req.body }, function (err, data) {
            if (err) {
                res.json({ status: "Failed" });
            }
            else if (data.n == 0) {
                res.json({ status: "No match Found" });
            }
            else {
                res.redirect("/books");
            }

        })
    })
    return booksRouter
}

module.exports =router;