const User = require("../models/user")


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
    view_users
}