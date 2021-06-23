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
    async getUserById(parent, args, context) {
      console.log(context)
      const foundUser = await User.findOne({
      $or: [
        {_id: context._id},
        {_id: args.id},
      ],
        
      });
  
      if (!foundUser) {
        throw new UserInputError("User not found!")
      }
  
      return foundUser;
    }
  },
  Mutation: {
    async login(parent, args) {
      let foundUser = await User.findOne({ $or: [{ email: args.email }] });

      const correctPw = await foundUser.isCorrectPassword(args.password);

      if (!correctPw) {
        throw new UserInputError("Error")
      }
      const token = signToken(foundUser);
      let result = {User:{username:foundUser.username, email:foundUser.email, password: foundUser.password, id: foundUser._id, savedProjects: foundUser.savedProjects},  token:{token}};
      console.log(result)
      return result
    },
    async createUser(parent, args) {
      const user = await User.create(args);
  
      if (!user) {
       throw UserInputError("Incorrect parameters!")
      }
      const token = signToken(user);
      console.log(user, token)
      return {User:{id: user._id},  token:{token}};
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
      let token = args.token;
      const id = data._id;
      try {
        const updatedUser = await User.findOneAndUpdate(
          {$or: [
            {_id: id},
          { _id: args.id }]},
          { $addToSet: { savedProjects: args.project } },
          { new: true, runValidators: true }
        );
        console.log(updatedUser)
        return updatedUser;
      } catch (err) {
        console.log(err);
        throw new UserInputError("Failed to update!")
      }
    },
    async deleteProjects(parent, args, context) {
      const updatedUser = await User.findOneAndUpdate(
        { _id: context._id },
        { $pull: { savedProjects: { ProjectId: args.ProjectId } } },
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
