import { discoverers } from '../data/discoverers';
import { elements } from '../data/elements';
const { filter, find } = require('lodash');

export const resolvers = {
    Query: {
        discoverer: (_, { id }) => find(discoverers, { id }),
        discoverers: () => discoverers,
        element: (_, { id }) => find(elements, { id }),
        elementByAtomicNumber: (_, { atomicNumber }) => find(elements, { atomicNumber }),
        elementBySymbol: (_, { symbol }) => find(elements, { symbol }),
        elements: () => elements,
    },

    Mutation: {
        addDiscoverer: (_, { firstName, lastName }) => {
            let numberOfDiscoverers = discoverers.length;
            // eslint-disable-next-line no-magic-numbers
            discoverers.push({ id: numberOfDiscoverers + 1, firstName: firstName, lastName: lastName });
            return discoverers[numberOfDiscoverers];
        },
        addElement: (_, { atomicNumber, atomicMass, symbol, name }) => {
            let numberOfElements = elements.length;
            // eslint-disable-next-line no-magic-numbers
            elements.push({ id: numberOfElements + 1, discovererId: 0, atomicNumber: atomicNumber, atomicMass: atomicMass, symbol: symbol, name: name });
            return elements[numberOfElements];
        },
        patchDiscovererOfElement: (_, { id, discovererId }) => {
            // eslint-disable-next-line no-magic-numbers
            let idx = id - 1;
            elements[idx].discovererId = discovererId;
            return elements[idx];
        },
        patchAtomicMassOfElement: (_, { id, atomicMass }) => {
            // eslint-disable-next-line no-magic-numbers
            let idx = id - 1;
            elements[idx].atomicMass = atomicMass;
            return elements[idx];
        },
        patchSymbolOfElement: (_, { id, symbol }) => {
            // eslint-disable-next-line no-magic-numbers
            let idx = id - 1;
            elements[idx].symbol = symbol;
            return elements[idx];
        },
        deleteElement: (_, { id }) => {
            /* eslint-disable no-magic-numbers */
            let idx = id - 1;
            elements.splice(idx, 1);
            /* eslint-enable no-magic-numbers */
            return elements;
        },
    },

    Discoverer: {
        elements: discoverer => filter(elements, { discovererId: discoverer.id }),
    },

    Element: {
        discoverer: element => find(discoverers, { id: element.discovererId }),
    },
};