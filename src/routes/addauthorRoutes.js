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

    //Delete an author
    addauthorRouter.post('/delete', function (req, res) {

    const id = req.body.id;  
    Authordata.findOneAndDelete({ _id: id })
        .then(function () {
            res.redirect('/authors')

        })  
    })

    //router to edit author
    addauthorRouter.post('/edit', function (req, res) {

    Authordata.findById(req.body.id, function(err, data){
        if (err) {
            throw err;
        }
        else {
            res.render('editauthor', {data})
        }
    })
    })

    //router to update author
    addauthorRouter.post('/update', function (req, res) {

        Authordata.findByIdAndUpdate(req.body.id, { $set: req.body }, function (err, data) {
            if (err) {
                res.json({ status: "Failed" });
            }
            else if (data.n == 0) {
                res.json({ status: "No match Found" });
            }
            else {
                res.redirect("/authors")
            }

        })  
    })

    return addauthorRouter
}

module.exports =router;