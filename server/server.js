const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})


const server = new ApolloServer({
  typeDefs,
  resolvers,
});



app.is
