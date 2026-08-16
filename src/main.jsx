import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

const container = document.getElementById('root');
if (container && container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app);
} else if (container) {
  ReactDOM.createRoot(container).render(app);
}
