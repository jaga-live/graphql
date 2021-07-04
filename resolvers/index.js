const {login} = require("../auth/auth")

const userResolver = require("../resolvers/user")

module.exports = {

    ...userResolver
}