const jwtUltils = require('../ultils/jwt')

//method post
let login = async (req,res,next)=>{
    try{
        let reqData = {
            username:req.body.username,
            password:req.body.password
        }
        console.log(req.body.username)
      let token =   await jwtUltils.crearteToken(reqData)
      let result = {
          username : reqData.username,
          password : reqData.password,
          token : token
      }
      return res.status(200).json(result)
    }catch(error){
        return res.status(500).json(error);
    }
    
}
let register =async (req,res,next)=>{
    res.send('register')
}
//method get
let getUserByID = async (req,res,next)=>{
    res.send(" getUserByID "+req.params.user)

}
//method patch
let updateUser= async (req,res,next)=>{
    
    res.send("updateUser"+req.param.user)
}
//method put
let refreshToken = async (req,res,next)=>{
    res.send("refreshToken")
}

//method delete
let logout = async (req,res,next)=>{
    res.send('logout')
}

module.exports ={
    login:login,
    getUserByID:getUserByID,
    updateUser : updateUser,
    refreshToken : refreshToken ,
    logout:logout,
    register:register
}