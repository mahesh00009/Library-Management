const UserModal = require("../Model/UserSchema")
const jwt = require('jsonwebtoken');


const privateKey = "43ab965890eb7203b4f31602dcf028cb6c6b0c4875b28f8022d2dfcce8e4a76b59e88f2af54059cee56060c1407b4214a10208d41fa0c5e366778907b9dd6f0e";

const header = {
	algorithm : "HS256"
}

const SignupUser = async (req, res) => {

    let response = req.body
    console.log(response)
    try{
    const checkEmail = await UserModal.findOne({email : response.email})

    if(checkEmail){
        req.status(200).json({status : "error", msg : "Email already exists"})
    } else{
        const newUser = UserModal(response)

       await newUser.save()
       res.status(200).json({status : "success", msg : "User successfully Registered"})

    }
  
    } catch(e) {
        res.status(200).json({ status : "error", msg : "something went wrong"})
    }
}



const LoginUser = async(req,res) => {


    let response =  req.body

    const checkEmail = await UserModal.findOne({ email : response.email})

    if(checkEmail && checkEmail.password === response.password){
 
        const {_id, __v, password, ...userToSend} = checkEmail.toObject()

        const jwtToken = jwt.sign(userToSend, privateKey, header);

        res.status(200).json({status : "success", msg : "Successfully Logged In", user : userToSend, webToken : jwtToken})

    } else{
        res.status(200).json({ status : "error" , msg : "credentials not matched"})
    }



    console.log(checkEmail)

}

const SendAllUsers = async(req, res) => {

    try{
    const allUsers = await UserModal.find({}, {_id : 0, password : 0, __v : 0}).lean()
    res.status(200).json({status : "success", users : allUsers})


    } catch(e) {
        res.status(200).json({status : "error"})
    }
}



module.exports = {SignupUser, LoginUser, SendAllUsers}

