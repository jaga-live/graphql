const {add_user, view_users} = require("../controllers/user")


module.exports = {
    Query : {
        getUsers : ()=> view_users()
    },

    Mutation : {
        addUser : (parent, args, context, info)=> add_user(args)
    }
    
}
