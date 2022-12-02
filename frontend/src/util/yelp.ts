import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const API_KEY =
  'gYmAvyaov47JDPPFxVeQAIxw3O_n4es-eRbxt_nxaCMe2c-priBAlsmTWL_vTUlgPWg31NDCn6cyPtx2k4cvqUsmR-iL7pduC_kwKeegAKG7O5cmXc-c01f6cEGFY3Yx';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/https://api.yelp.com/v3/graphql',
  //   uri: 'http://localhost:5000',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'Accept-Language': 'en-US',
      authorization: `Bearer ${API_KEY}`,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
