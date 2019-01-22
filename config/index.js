import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import fetch from 'isomorphic-unfetch';

import { GRAPH_URL } from '../constants';

if(!process.browser) global.fetch = fetch;

const client = new ApolloClient({ 
    uri: GRAPH_URL
});

export default ({ children }) => (
    <ApolloProvider client={client}>
        { children }
    </ApolloProvider>
) 