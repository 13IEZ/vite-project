import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from 'error/ErrorBoundary';
import { Provider } from 'react-redux';
import store from 'store/configureStore';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';

const app = (
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(app);
