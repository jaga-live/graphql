const {UserInputError} = require("apollo-server")
const {config} = require("dotenv")
config()

const User = require("../models/user")

const {hashSync} = require("bcrypt")
const {sign} = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET

//////Add a new User
const add_user = async(data)=>{
    try {
        const {name, email, password} = data.userInput
        var id
        var checkUser = await User.countDocuments({email})
        if(checkUser !==0 )  return new Error("Username exists!")

        
        await User.insertMany({
            name,
            email,
            password : hashSync(password, 12),
        }).then(res=>{
             id = res[0]._id
        })

        var token = sign({_id : id, type : "user"},jwtSecret)

        await User.updateOne({_id : id},{
            $push : {jwt : token}
        })

        return "User Created"

    } catch (error) {
        console.log(error)
    }
}


const view_user = async(data)=>{
    try {
        const {_id} = data

        var user = await User.findOne({_id})

        return user

        
    } catch (error) {
        console.log(error)
        return new UserInputError("Error")
        
    }
}

//////View User 
const view_users = async()=>{
    try {

        return [
            {
                name : "Jaga",
                email : "jaga@gmail.com"
            },
            {
                name : "Adam",
                email : "adam@gmail.com"
            }
        ]
        
    } catch (error) {

        throw new Error("Something Went Wrong")
        
    }
}


module.exports = {
    add_user,
    view_users,
    view_user
}