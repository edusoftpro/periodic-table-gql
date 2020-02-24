import { resolvers } from './gql/resolvers';
import { typeDefs } from './gql/schema';

const { ApolloServer } = require('apollo-server-express');
const { prisma } = require('./generated/prisma-client')

const express = require('express');

const gqlApp = express();
const gqlPort = 8000;
const localApp = express();
const localPort = 8001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { prisma }
});

server.applyMiddleware({ app: gqlApp });

gqlApp.listen({ port: gqlPort }, () => {
  // eslint-disable-next-line no-console
  console.log(`Server ready at http://localhost:${gqlPort}${server.graphqlPath}`)
})

localApp.get('/', (_, res) => res.send('Hello World!'));
localApp.get('/testconf', (_, res) => res.send('Привет, мир!'));

localApp.listen({ port: localPort }, () => {
  // eslint-disable-next-line no-console
  console.log(`Server ready at http://localhost:${localPort}/`)
})
