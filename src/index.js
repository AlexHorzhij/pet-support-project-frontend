import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { store, persistor } from '../src/redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'components/App';

import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { ThemeOptions } from 'muiSettings/muiSettings';

import './i18n'

const theme = createTheme(ThemeOptions);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
