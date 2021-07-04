const gql = require("graphql-tag")

var userSchema = require("./user")
var docSchema = require("./document")


const schema = gql`

extend type Query {
    _empty : String
}

extend type Mutation {
    _empty : String
}

${userSchema}
${docSchema}
    

`


module.exports = schema