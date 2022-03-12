    const express = require("express");
    const app = new express();
    const nav = [
        {link:'/books',name:'Books'},
        {link:'/authors',name:"Authors"},
        {link:'/admin',name:"Add Book"},
        {link:'/signup',name:"Sign Up"},
        {link:'/login',name:"Login"}

    ]
    const booksRouter =require("./src/routes/bookRoutes")(nav)
    const adminRouter =require("./src/routes/adminRoutes")(nav)
    app.use(express.static('./public'))
    app.use(express.urlencoded({extended:true}));
    app.set('view engine','ejs');
    app.set("views",__dirname+"/src/views");

    app.get('/',(req,res)=>{
        res.render("index",{title:'Library',nav});
    });
    // res.render("index",{books:['book1','book2'],title:'Library'});
    // res.sendFile(__dirname+"/src/views/index.html");
    // res.sendFile("C:/Users/Abhilash/OneDrive/Desktop/FSD Practice/LibraryApp/src/views/index.html");
    // app.get('/books',(req,res)=>{
    //     res.render("books",{nav:[{link:'/books',name:'Books'},{link:'/author',name:"Author"}],title:'Library'});
    // });

    app.use('/books',booksRouter);
    app.use('/admin',adminRouter);

    app.listen(4000);