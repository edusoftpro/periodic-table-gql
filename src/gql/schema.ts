export const typeDefs = `
  # the schema allows the following query:
  type Query {
    elements: [Element]
    discoverer(id: Int!): Discoverer
    discoverers: [Discoverer]
    element(id: Int!): Element
    elementByAtomicNumber(atomicNumber: Int!): Element
    elementBySymbol(symbol: String!): Element
    dbElements: [Element]

  }

  type Mutation {
    addDiscoverer(firstName: String!, lastName: String!): Discoverer
    addElement(atomicNumber: Int!, atomicMass: Float!, symbol: String!, name: String!): Element
    patchDiscovererOfElement(id: Int!, discovererId: Int!): Element
    patchAtomicMassOfElement(id: Int!, atomicMass: Float!): Element
    patchSymbolOfElement(id: Int!, symbol: String!): Element
    deleteElement(id: Int!): [Element]
  }

  type Discoverer {
    id: Int!
    firstName: String
    lastName: String
    """
    The list of Elements discovered by this person
    """
    elements: [Element]
  }

  type Element {
    id: Int!
    discoverer: Discoverer
    atomicNumber: Int!
    atomicMass: Float!
    symbol: String!
    name: String!
  }
`;