"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_lib_1 = require("prisma-client-lib");
const typeDefs = require("./prisma-schema").typeDefs;

const models = [
  {
    name: "Discoverer",
    embedded: false
  },
  {
    name: "Element",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/adrianbala-4b68d7/periodic-table-gql/dev`
});
exports.prisma = new exports.Prisma();
