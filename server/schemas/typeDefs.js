const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
  }
  type Auth {
    token: ID!
    user: User
  }
  input ResumeSaved {
    username: String!
    email: String!
    education: String!
    pastJobs: String!
    skills: String!
  }
  input SavedJobs {
    jobTitle: String!
    employer: String!
    description: String!
    jobId: String!
    HourlyPay: String!
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    resumeSaved(input: SavedResume): User
    saveJobs(input: SavedJobs): User
  }
  type Query {
    me: User
    SaveJobs: [SavedJobs]
    ResumeSaved: [ResumeSaved]
  }
`;

module.exports = typeDefs