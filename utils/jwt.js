const jwt =  require('jsonwebtoken')
require('dotenv').config()
const check  = require('./ValidInput')
/**
 * Tạo mới token từ thông tin user
 * @param {*} user 
 * @param {*} scret 
 * @param {*} ttl 
 */
let createToken = (data,secretKey = process.env.KEY,ttl = process.env.TTL||"1h")=>{
   
    return new Promise((resolve,reject)=>{
        
        if(check.isEmpty(data.username||data.name)&&check.isEmpty(data.password)){
            reject({message:"Thiếu thông tin đăng nhập!"})
        }
        jwt.sign(
            {data:data}
            ,secretKey,{
                algorithm:"HS256",
                expiresIn:ttl
            },(err,token)=>{
                if(err) return reject({message:"Lỗi tạo token!"})
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
/**
 * 
 * @param {*} token 
 * @param {*} secretKey 
 */
let refreshToken = (token,secretKey)=>{
    const decodeToken = jwt.verify(token,secretKey,(err,data)=>{
        if(err) return null;
        return data
    })
    if(!decodeToken) return 
    return createToken(dataDecode)

}
module.exports = {
    createToken:createToken,
    verifyToken:verifyToken,
    refreshToken:refreshToken
}