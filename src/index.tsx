import React from 'react';
import ReactDOM from 'react-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
  } from "@apollo/client";

import App from './components/app/app.component';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
  });


const rootElement = document.getElementById('root');
ReactDOM.render(
  <div>
   <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ApolloProvider>,
  </div>,
  rootElement
);

