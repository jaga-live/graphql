
const gql = require("graphql-tag")



module.exports = gql`

# Global Query
  extend type Query {
        getUsers : [User]!
        getUser(_id : ID!) : User!
        login(email : String!, password : String!) : User!

    }

# Mutation
   extend type Mutation {
        addUser(userInput : UserInput) : String
    }



# Data types for User Schema
    type User {

        name : String!
        email : String!
        password : String!
        _id : ID!
        
    }

#Input
    input UserInput {
        name : String!
        email : String!
        password : String!
    }




`