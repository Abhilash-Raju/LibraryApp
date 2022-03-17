    const express = require("express");
    const app = new express();
    const nav = [
        {link:'/books',name:'Books'},
        {link:'/addBook',name:"Add Book"},
        {link:'/authors',name:"Authors"},
        {link:'/addAuthor',name:"Add Author"},
        {link:'/signup',name:"Sign Up"},
        {link:'/login',name:"Login"}
    ]

    const booksRouter =require("./src/routes/bookRoutes")(nav)
    const adminRouter =require("./src/routes/adminRoutes")(nav)
    const authorRouter =require("./src/routes/authorRoutes")(nav)
    const addauthorRouter =require("./src/routes/addauthorRoutes")(nav)
    const signupRouter =require("./src/routes/signupRoutes")(nav)
    const loginRouter =require("./src/routes/loginRoutes")(nav)

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
    app.use('/addBook',adminRouter);
    app.use('/authors',authorRouter);
    app.use('/addAuthor',addauthorRouter);
    app.use('/signup',signupRouter);
    app.use('/login',loginRouter);

    app.listen(process.env.PORT || 5000,()=>{console.log("Welcome to LibraryApp")});