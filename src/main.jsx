import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import Navigation from './Navigation';
import theme from './theme';
import AntonSerdyuchenkoMobileAvatar from './static/images/avatar/AntonSerdyuchenko-Mobile.webp';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Navigation />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
