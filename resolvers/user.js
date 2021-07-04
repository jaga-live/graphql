const {view_users} = require("../controllers/user")


module.exports = {
    Query : {
        getUsers : ()=> view_users()
    }
}
