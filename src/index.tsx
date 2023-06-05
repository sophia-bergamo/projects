import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewPage from './page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const client = new ApolloClient({
  uri: 'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql', //especifica a URL do nosso servidor GraphQL.
  cache: new InMemoryCache(), //armazenar em cache os resultados da consulta após buscá-los.
})

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/page' element={<NewPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals()
