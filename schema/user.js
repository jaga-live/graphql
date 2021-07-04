
const gql = require("graphql-tag")



module.exports = gql`

  extend type Query {

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

   extend type Mutation {
        addUser(userInput : UserInput) : User
    }



`