const {validateToken} =require("../services/authentication");

function checkForAuthenticationCookie(cookieName){
    return (req,res,next)=>{
        const tokenCookieValue=req.cookies[cookieName]
        if(!tokenCookieValue){
            return next();
        }
        try{
            const userPayload= validateToken(tokenCookieValue);
            req.user=userPayload;
            req.locals.user=userPayload;
        }catch (error){
            return next();
        };
        next();
    }
}


module.exports={
    checkForAuthenticationCookie,
}