const jwt =  require('jsonwebtoken')
/**
 * Tạo mới token từ thông tin user
 * @param {*} user 
 * @param {*} scret 
 * @param {*} ttl 
 */
let crearteToken = (user,secretKey,ttl)=>{
    return new Promise((resolve,reject)=>{
        const data ={
            _id: user._id,
            username: user.username,
            password: user.password
        }
        jwt.sign(
            {data:data}
            ,secretKey,{
                algorithm:"HS256",
                expiresIn:ttl
            },(err,token)=>{
                if(err) return reject(err)
                resolve(token)
            });
    });
}
/**
 * Trả về thông tin user từ token
 * @param {*} token 
 * @param {*} screct 
 */
let verifyToken =(token,secretKey)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,secretKey,(err,dataDecode)=>{
            if(err) return reject(err)
            resolve(dataDecode)
        });
    });
}
module.exports = {
    crearteToken:crearteToken,
    verifyToken:verifyToken
}