import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import AppProvider from './hooks';
import Routes from './routes';

import GlobalStyle from './assets/Styles/global';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppProvider>
          <Routes />
        </AppProvider>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
};

export default App;
