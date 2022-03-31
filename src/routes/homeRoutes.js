const express = require('express'); 
const homeRouter = express.Router();
function router(authUser){
    homeRouter.get('/',authUser,function(req,res){
    
        res.render('home',{});
        
    })
return homeRouter
}

module.exports = router;