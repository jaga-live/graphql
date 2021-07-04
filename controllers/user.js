const User = require("../models/user")
const {UserInputError} = require("apollo-server")

//////Add a new User
const add_user = async(data)=>{
    try {
        const {name, email} = data.userInput

        var checkUser = await User.countDocuments({email})
        if(checkUser !==0 )  return new Error("Username exists!")

        await User.insertMany({
            name,
            email
        })

        return {
            name : "Jaga",
            email : "jaga@gmail.com"
        }
    } catch (error) {
        
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
    view_users
}