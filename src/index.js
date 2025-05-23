import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

import Root from './routers/root';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>

    <Auth0ProviderWithHistory>
      <Root/>
    </Auth0ProviderWithHistory>
</React.StrictMode>,
)
reportWebVitals();
