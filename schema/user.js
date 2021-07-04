
const gql = require("graphql-tag")



module.exports = gql`

    type Query {

        getUsers : [User]!

    }

    type User {

        name : String!
        email : String!
        
    }

    input UserInput {
        name : String!
        email : String!
    }

    type Mutation {
        addUser(userInput : UserInput) : User
    }



`