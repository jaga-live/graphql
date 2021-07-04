
const gql = require("graphql-tag")



module.exports = gql`

    type Query {

        getUsers : [User]!

    }

    type User {

        name : String!
        email : String!
        
    }



`