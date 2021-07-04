const {add_user, view_users, view_user} = require("../controllers/user")


module.exports = {
    Query : {
        getUsers : ()=> view_users(),
        getUser : (_,args,context,info)=> view_user(args)
    },

    Mutation : {
        addUser : (parent, args, context, info)=> add_user(args)
    }
    
}
