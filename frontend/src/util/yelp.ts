import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { url } from './url';

const httpLink = createHttpLink({
  uri: `${url}/yelp`,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'Accept-Language': 'en-US',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
