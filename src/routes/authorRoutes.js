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
   
    authorRouter.post('/delete', function (req, res) {

        const id = req.body.id;  
    
        Authordata.findOneAndDelete({ _id: id })
            .then(function () {
    
                res.redirect('/authors')
    
            })  
    })
    
    
    
    //router to edit author
    authorRouter.post('/edit', function (req, res) {
    
        Authordata.findById(req.body.id, function(err, data){
            if (err) {
                throw err;
            }
            else {
                res.render('editauthor', {nav, data})
            }
        })
    })
    
    authorRouter.post('/update', function (req, res) {

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
    return authorRouter
}

module.exports =router;