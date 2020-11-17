const jwtUltils = require('../../ultils/jwt.js')

const secretKey = process.env.KEY|| "access-token-secret"

let middlwareIsAuth = async (request,response,next)=>{
    const token = request.body.token ||request.query.token || request.headers["x-access-token"];
    if(token){
        try{
            let dataFromToken = await jwtUltils.verifyToken(token,secretKey)
            request.token = dataFromToken
            next()
        }catch(err){
            return respons.status(401).send({
                message:"Unauthorized",
                idError: 002
            })
        }
    }else{
        return response.status(403).send(
            {
                message:"No token!",
                idError: 001
            }
        )
    }
}
module.exports= {
    middlwareIsAuth:middlwareIsAuth
}