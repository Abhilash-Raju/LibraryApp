// Accessing Mongoose Package
const mongoose = require("mongoose");
// Creating Database connection
mongoose.connect("mongodb+srv://Abhilash:1289lash@abhicluster.zckzz.mongodb.net/LibraryApp?retryWrites=true&w=majority");
// mongoose.connect("mongodb://localhost:27107/Library");

// Schema Definition from Mongoose.Schema package
const Schema = mongoose.Schema;

// Creating a new Schema named BookSchema using constructor Schema
const AuthorSchema = new Schema({
    title: String,
    image: {
        data: Buffer,
        contentType: String
    },
    about: String,
});

// In order to use the new Schema created we need to create a Model using mongoose.model package ("Collection Name", "Schema Name")
const Authordata = mongoose.model("authordata",AuthorSchema);

// Exporting the Model created (Bookdata)
module.exports = Authordata