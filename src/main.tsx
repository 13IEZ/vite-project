import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from 'error/ErrorBoundary';
import App from 'App';

const app = (
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(app);
