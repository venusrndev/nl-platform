import React from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

export function render(url, context = {}) {
  const helmetContext = {};
  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <MemoryRouter initialEntries={[url]}>
          <App />
        </MemoryRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
  const { helmet } = helmetContext;
  return { html, helmet };
}
