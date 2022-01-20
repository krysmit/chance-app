const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id }).select(
            "-__v -password"
          );
          return userData;
        }
        throw new AuthenticationError("You need to be logged in!");
      },
    },
    Mutation: {
        login: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
    
          if (!user) {
            throw new AuthenticationError("No user found with this email address!");
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError(
              "Incorrect credentials. Please try again."
            );
          }
    
          const token = signToken(user);
    
          return { token, user };
        },

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
          },
      
          saveResume: async (parent, { input }, context) => {
            if (context.user) {
              const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { SavedResume: input } },
                { new: true, runValidators: true }
              );
              return updatedUser;
            }
            throw new AuthenticationError(
              "You must be logged in to perform this action."
            );
          },
      
          removeResume: async (parent, { bookId }, context) => {
            if (context.user) {
              const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { SavedResume: { bookId: bookId } } },
                { new: true }
              );
              return updatedUser;
            }
            throw new AuthenticationError(
              "You must be logged in to perform this action."
            );
          },
        },
      };


module.exports = resolvers;