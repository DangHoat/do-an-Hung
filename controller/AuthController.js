const jwtUltils = require('../utils/jwt')
const User = require('../database/Schema/User')

//method post
let login = async (req, res, next) => {
    console.log(req.body)
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
    if (user.password == password) {
        try {
            let reqData = {
                username: req.body.username,
                password: req.body.password
            }
            let token = await jwtUltils.crearteToken(reqData)
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
let register = async (req, res, next) => {
    console.log(typeof (req.body.phoneNumber))
    const user = new User({
        username: req.body.username,
        password: req.body.password,
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
//method get
let getUserByID = async (req, res, next) => {
    res.send(" getUserByID " + req.params.user)

}
//method patch
let updateUser = async (req, res, next) => {

    res.send("updateUser" + req.param.user)
}
//method put
let refreshToken = async (req, res, next) => {
    res.send("refreshToken")
}

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