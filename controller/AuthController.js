const jwtUltils = require('../utils/jwt')
const bcrypt = require('bcrypt')
const User = require('../database/Schema/User')

//method post
let login = async (req, res, next) => {
    let { username, password } = req.body
    let user
    try {
         user = await User.findOne({
            username: username
        })
    } catch (error) {
        return res.status(404).json(error)
    }
    
    if (user == null) {
        return res.status(404).json({ message: "Tài khoản hoặc mật khẩu không đúng", idError: 002 })
    }
    if (bcrypt.compareSync(user.password,password)) {
        try {
            let reqData = {
                username: req.body.username,
                password: req.body.password
            }
            let token = await jwtUltils.createToken(reqData)
            let result = {
                username: reqData.username,
                password: reqData.password,
                token: token
            }
            return res.status(200).json(result)
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    return res.status(404).json({ message: "Tài khoản hoặc mật khẩu không đúng", idError: 002 })
}
/**
 * them moi user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
let register = async (req, res, next) => {
    console.log(typeof (req.body.phoneNumber))
    const user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password,process.env.SALT),
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        role: req.body.role,
        address: req.body.address
    })
    try {
        const newUser = await user.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
    res.send('register')
}
/**
 *Lay toan bo user 
 * @param {*} res 
 * @param {*} next 
 */
let getUserByID = async (req, res, next) => {
    try {
    User.findOne({
             id:{$eq:req.param.userID}
        },(err,docs)=>{
            if(err){
                return res.status(404).send({
                    message:"No user exist!"
                })
            }else{
                return res.status(200).send(docs)
            }
        })
        
    } catch (error) {
        return res.status(500).send({
            message:error
        })
    }

}
/**
 * cap nhap sua doi thong tin user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
let updateUser = async (req, res, next) => {
    let id = req.body.id;
    if(!id) return res.status(500).send({message:"không thể xác định user!"})
   try {
       User.findOneAndUpdate({ id:id},req.body,(err,docs)=>{
           if(err) return res.status(500).send({
               message: err
           })
           return res.status(200).send({
               message:"Thành công!!"
           })
       })
   } catch (err) {
    return res.status(500).send({
        message:err
    })
   }
}
/**
 * Lam moi token
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
let refreshToken = async (req, res, next) => {
    res.send("refreshToken")
}
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
//method delete
let logout = async (req, res, next) => {
    res.send('logout')
}

module.exports = {
    login: login,
    getUserByID: getUserByID,
    updateUser: updateUser,
    refreshToken: refreshToken,
    logout: logout,
    register: register
}