const JWT=require('jsonwebtoken');
const secret="$uperMan@123";


// this function taking the user object and generate a token 
function createTokenForUser(user){
    const payload={
        _id:user._id,
        email:user.email,
        profileImageURL:user.profileImageURL,
        role:user.role,
    };

    const token=JWT.sign(payload,secret);
    return token;
}


function validateToken(token){
    const payload=JWT.verify(token,secret);
    return payload;
}

module.exports ={
    createTokenForUser,
    validateToken,
}