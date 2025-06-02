import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Auth0Provider
        domain="gestion-horarios-upla.us.auth0.com"
        clientId="v9OEyMqrb2rUMI3VbNqnlOGjyBQr4DVA"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <App />
    </Auth0Provider>
);
