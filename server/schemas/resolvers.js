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
    },
    getSkills: async (parent, args, context) => {
      // TODO think about using context
      const user = await User.findOne(
        {_id: context.user._id}, 
        ).select('profile.skills');

      return user
    },
    getProjects: async (parent, args, context) => {
      // TODO think about using context
      const user = await User.findOne(
        {_id: context.user._id}, 
        ).select('savedProjects');

      return user
    }
  },
  Mutation: {

    addSkills: async (parent, { skill }, context) => {
      let user = await User.findOneAndUpdate(
        {_id: context.user._id},
        { $push: { 'profile.skills': skill }
      });
      
      return user
    },

    login: async (parent, args, context) => {
      let foundUser = await User.findOne({ email: args.email });

      const correctPw = await foundUser.isCorrectPassword(args.password);
      console.log(foundUser)

      if (!correctPw) {
        throw new UserInputError("Error")
      }
      const token = await signToken(foundUser);

      return { token, user: foundUser }
    },

    createUser: async (parent, { username, firstName, lastName, email, password }) => {
      const user = await User.create({ username, firstName, lastName, email, password });
  
      if (!user) {
       throw UserInputError("Incorrect parameters!")
      }
      const token = await signToken(user);
      return { token, user };
    },

    updateUser: async (parent, { username, email, password }, context) => {
      const user = await User.findOneAndUpdate(
        { id: context.user._id }, 
        {$set: {updatedUsername: username, updatedEmail: email, updatedPassword: password} }, 
        { new: true});
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
    
    //TODO: update project resolver
    updateProject: async (parent, args, context) => {
      const user = await User.findOneAndUpdate(
        { id: context.user._id },
        {$set: {savedProjects: [{dueDate: args.dueDate}, {client: args.client}, {checked: args.checked}] }},
        { new: true});
        console.log(user)
        return user
    },
    //TODO: delete project resolver


    async savedProjects(parent, args, context) {
      console.log(args)
      const id = context.user._id;
      console.log(id)
      try {
        const updatedUser = await User.findOneAndUpdate(
          { _id: id },
          { $push: { savedProjects: args } },
          { new: true, runValidators: true }
        );
        return updatedUser;
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
