const express = require('express'); 
const loginRouter = express.Router();
const user = require('../data/user');
let alert = require('alert'); 

function router(nav){
loginRouter.get('/',function(req,res){

    res.render('login',{nav,title:'Login'});
    
})

// User Authentication

loginRouter.get("/check",function(req,res){
    var checkuser = {
        "userid":req.param("userid"),
        "pwdid":req.param("pwdid")
    };
    
    console.log(checkuser);
    var flag=false;
    
       for(let i=0;i<user.length;i++){
        
        if((checkuser.userid==user[i].userid && checkuser.pwdid==user[i].pwdid))
        {
            flag=true;

            if ((checkuser.userid=='admin@domain.com')&& (checkuser.pwdid =='Admin@1234'))
            {   console.log(flag)
                flag=true;
                alert("Hello Admin")
            }
            break;
        }
        else{
                flag=false;
            }
        };

        console.log(flag);

if(flag==true){
    alert("User Verified");
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