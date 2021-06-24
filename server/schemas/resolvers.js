const { UserInputError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");
const jwt = require('jsonwebtoken');


const resolvers = {
  Query: {
    async getUserByUsername(parent, args) {
      const foundUser = await User.findOne({
        username: args.username
      });
  
      if (!foundUser) {
        throw new UserInputError("User not found!")
      }
  
      return foundUser;
    },
    getUserById: async (parent, args, context) => {
      const foundUser = await User.findOne({_id: context.user._id});
  
      if (!foundUser) {
        throw new UserInputError("User not found!")
      }
  
      return foundUser;
    }
  },
  Mutation: {
    login: async (parent, args) => {
      let foundUser = await User.findOne({ $or: [{ email: args.email }] });

      const correctPw = await foundUser.isCorrectPassword(args.password);

      if (!correctPw) {
        throw new UserInputError("Error")
      }
      const token = await signToken(foundUser);
      
      return { token, foundUser }
    },

    createUser: async (parent, { username, firstName, lastName, email, password }) => {
      const user = await User.create({ username, firstName, lastName, email, password });
  
      if (!user) {
       throw UserInputError("Incorrect parameters!")
      }
      const token = await signToken(user);
      return { token, user };
    },

    async newUser(parent, args) {
      const user = await User.create(args);
  
      if (!user) {
       throw UserInputError("Incorrect parameters!")
      }
      const token = signToken(user);
      console.log(user, token)
      return {User:{id: user._id},  token:{token}};
    },
    
    
    async savedProjects(parent, args, context) {
      console.log(args)
      const id = context.user._id;
      try {
        const updatedUser = await User.findOneAndUpdate(
          {_id: id},
          { $push: { savedProjects: args.project } },
          { new: true, runValidators: true }
        );
        return updatedUser.savedProjects;
      } catch (err) {
        console.log(err);
        throw new UserInputError("Failed to update!")
      }
    },

    async deleteProjects(parent, args, context) {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedProjects: { projectId: args.projectId } } },
        { new: true }
      );
      if (!updatedUser) {
        throw new UserInputError("Failed to delete!")
      }
      return updatedUser;
      
    },
  }
};

module.exports = resolvers;
