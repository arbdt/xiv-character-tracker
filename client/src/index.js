// imports
import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css"; // style sheet
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"; // for Auth0
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history"; // for Auth0
import { Auth0Provider } from '@auth0/auth0-react';

// render react index app etc
ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App/>  
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);