const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    resume:ID!
  }
  type Auth {
    token: ID!
    user: User
  }
 OtherJeffery
  type Resume {

  input SavedResume {
 main
    username: String!
    email: String!
    education: String!
    pastJobs: String!
    skills: String!
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
 OtherJeffery
    saveResume(username: String!, email: String!, education: String!, pastJobs: String!, skills: String!): User

    saveResume(input: SavedResume): User
    saveJobs(input: SavedJobs): User
 main
  }
  type Query {
    me: User
    SaveJobs: [SavedJobs]
    SaveResume: [SaveResume]
  }
`;

module.exports = typeDefs