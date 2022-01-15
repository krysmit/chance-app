const { gql } = require('apollo-server-express');

// define typedefs (based on assignment README)
const typeDefs = gql`
  type User {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String
  }
  type Query {
    me: User
  }
 
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs