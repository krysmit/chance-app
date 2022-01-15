const { gql } = require('apollo-server-express');

// define typedefs (based on assignment README)
const typeDefs = gql`
  type User {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String
  }
  type Auth {
    token: ID!
    user: User
  }
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs