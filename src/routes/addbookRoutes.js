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


    //Delete a Book
    addbookRouter.post('/delete', function (req, res) {

    const id = req.body.id;  
    Bookdata.findOneAndDelete({ _id: id })
        .then(function () {
            res.redirect('/books')
        })  
    })

    //Router to edit Book
    addbookRouter.post('/edit', function (req, res) {

    Bookdata.findById(req.body.id, function(err, data){
        if (err) {
            throw err;
        }
        else {
            res.render('editbook', {data})
        }
    })
    })

    //Router to update Book
    addbookRouter.post('/update', function (req, res) {

        Bookdata.findByIdAndUpdate(req.body.id, { $set: req.body }, function (err, data) {
            if (err) {
                res.json({ status: "Failed" });
            }
            else if (data.n == 0) {
                res.json({ status: "No match Found" });
            }
            else {
                res.redirect("/books")
            }

        })  
    })

    return addbookRouter
}

module.exports =router;