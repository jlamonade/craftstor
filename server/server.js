const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})


const server = new ApolloServer({
  typeDefs,
  resolvers,
});



app.is