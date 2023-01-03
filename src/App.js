import React, { useState } from "react";
import "./App.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";


import { onError } from "@apollo/client/link/error";

import HomePage from "./pages/HomePage";

import ReactGA from 'react-ga';

const TRACKING_ID = "G-R5DCMHSGW9"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

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
