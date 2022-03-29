    const express = require("express");
    const app = new express();
    const nav = [
        {link:'/books',name:'Books'},
        {link:'/addBook',name:"Add Book"},
        {link:'/authors',name:"Authors"},
        {link:'/addAuthor',name:"Add Author"},
        {link:'/login',name:"Log Out"},
    ];
    const navauth =[
        {link:'/signup',name:"Sign Up"},
        {link:'/login',name:"Log In"}
    ];
    const booksRouter =require("./src/routes/bookRoutes")(nav)
    const adminRouter =require("./src/routes/adminRoutes")(nav)
    const authorRouter =require("./src/routes/authorRoutes")(nav)
    const addauthorRouter =require("./src/routes/addauthorRoutes")(nav)
    const addbookRouter =require("./src/routes/addbookRoutes")(nav)
    const homeRouter = require('./src/routes/homeRoutes'); 
    const signupRouter =require("./src/routes/signupRoutes")(navauth)
    const loginRouter =require("./src/routes/loginRoutes")(navauth)

    app.use(express.static('./public'))
    app.use(express.urlencoded({extended:true}));
    app.set('view engine','ejs');
    app.set("views",__dirname+"/src/views");

    app.get('/',(req,res)=>{
        res.render("index",{title:'MyLibraryApp',navauth});
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
    app.use('/addBook',addbookRouter);
    app.use('/signup',signupRouter);
    app.use('/login',loginRouter);
    app.use('/home',homeRouter); 


    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
    console.log(`Our Library app is running on http://localhost:${PORT}`);
});
    // app.listen(5000,()=>{console.log("Welcome to LibraryApp")});