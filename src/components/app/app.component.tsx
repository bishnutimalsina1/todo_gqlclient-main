import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../../apollo-client';
import './app.component.css';
import AppBars from '../AppBar/appbars.component';
import Main from '../Main/main.component'
// import Header from '../header/header.component';

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Main />
        </ApolloProvider>
        
    );
}

export default App;