const {ApolloServer} = require("apollo-server")

//////MongoDB
require("./database/mongoose")


//////Importing Resolvers and Schema
const typeDefs = require("./schema")
const resolvers = require("./resolvers/index")


const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen({port : 5000},()=>{
    console.log("Server is running! 😸")
})
