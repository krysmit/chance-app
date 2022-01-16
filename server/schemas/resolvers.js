const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('Not logged in')
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user)
            return { user, token }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No matching email found');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect Password');
            }
            const token = signToken(user);
            return { token, user }
        },
        saveBook: async (parent, { content }, { user }) => {
            if (user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: user._id },
                    { $addToSet: { savedBooks: content } },
                    { new: true}
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!')
        },
        removeBook: async (parents, { bookId }, { user }) => {
            if (user) {
                const modifiedUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { $pull: { savedBooks: { bookId: bookId } } },
                    { new: true, runValidators: true }
                );
                return modifiedUser;
            }
            throw new AuthenticationError('You need to be logged in!')
        },
    }
};
module.exports = resolvers