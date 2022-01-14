const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models/User');
const { signToken } = require('../utils/auth');
const resolvers = {
    Query: {

        me: async (parent, args, context) => {
            if (context.user) {
                const userData = 
                await User.findOne({ _id: context.user._id }).select("-__v -password");
                return userData;
            }
            throw new AuthenticationError('Please log into the application :)');
        },
    },


    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('The information provided does not match our records. Please try again!');
            }

                        const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('The information provided does not match our records. Please try again!');
            }
        },
    }
}
module.exports = resolvers;