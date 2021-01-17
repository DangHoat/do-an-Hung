const jwtUltils = require('../utils/jwt')
const bcrypt = require('bcrypt')
const User = require('../database/Schema/User')
const {validatePassword} = require('../utils/ValidInput')
const { use } = require('../routeAPI/mapRoute')

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
    if (bcrypt.compareSync(password,user.password)) {
        try {
            let reqData = {
                _id:user._id,
                username: req.body.username,
                password: req.body.password
            }
            let token = await jwtUltils.createToken(reqData)
            let result = {
                user : {
                    "create_at": user.create_at,
                    "_id": user._id ,
                    "username": user.username,
                    "email": user.email,
                    "phoneNumber": user.phoneNumber,
                    "role": user.role,
                    "address": user.address,
                },
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
  if(!validatePassword(req.body.password)){
      return res.status(404).send({
          message:`Mật khẩu ít nhất 8 kí tự,1 chữ hoa và 1 số!`
      })
  }
  try {
    var salt = bcrypt.genSaltSync(Math.floor(Math.random() * 10)+1)
    const user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password,salt),
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        role: req.body.role,
        address: req.body.address
    })
  
        const newUser = await user.save()
        return res.status(200).json({
            message : "Tạo thành công!"
        })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
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
