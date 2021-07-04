const {add_user, view_users, view_user} = require("../controllers/user")
const {login} = require("../auth/auth")

module.exports = {
    Query : {
        getUsers : ()=> view_users(),
        getUser : (_,args,context,info)=> view_user(args),
        login : (_,args,context,info)=> login(args)
    },

    Mutation : {
        addUser : (parent, args, context, info)=> add_user(args)
    }
    
}
