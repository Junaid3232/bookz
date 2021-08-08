import { ApolloClient, InMemoryCache} from '@apollo/client';

const cache = new InMemoryCache();

const client = new ApolloClient({
    uri: 'https://www.neighbookz.com/graphql/',
    cache,
    defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
});

export default client;
