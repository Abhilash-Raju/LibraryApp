const express = require('express'); 
const loginRouter = express.Router();
const user = require('../data/user');
let alert = require('alert'); 
// const {Signupdata} = require("../model/Signupdata");
// const SignupSchema = require("../model/Signupdata");


function router(nav,authUser){
loginRouter.get('/',function(req,res){

    res.render('login',{nav,title:'Login'});
    
})

// User Authentication

loginRouter.get("/check",authUser,function(req,res){
    var checkuser = {
        "userid":req.param("userid"),
        "pwdid":req.param("pwdid")
    };
    
    console.log(checkuser);
    var flag=false;
    
//    var flagg = user.find((e)=>{
       for(let i=0;i<user.length;i++){
        
        if((checkuser.userid==user[i].userid && checkuser.pwdid==user[i].pwdid))
        {
            // alert (signupdata)
            flag=true;
            break;
        }
        else{
                flag=false;
            }
        };

        console.log(flag);

if(flag==true){
    alert("User Verified.Click to continue");
    res.redirect("/home")
}
else{
    alert("User Verification Failed");
    res.redirect("/signup");
}

});

  return loginRouter

}


module.exports = router;