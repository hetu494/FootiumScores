import React, { useState } from "react";
import "./App.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

import Button from '@mui/material/Button';

import { onError } from "@apollo/client/link/error";

import GetFixtures from './components/GetFixtures';

import GetFixtureResults from './components/GetFixtureResults';
import HomePage from "./pages/HomePage";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://footium.club/beta/api/graphql-new" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://footium.club/beta/api/graphql-new'
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <HomePage/>
        {/*<GetFixtureResults />*/}
      </div>
    </ApolloProvider>
  );
}

export default App;
