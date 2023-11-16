import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { theme } from './components/Theme';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyles.styles';
import { Provider } from 'react-redux';
import store from './store'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme} >
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
