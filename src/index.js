import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/styles/_colors.css';
import './assets/styles/_fonts.css';
import './assets/styles/_styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { FunctionProvider } from './context/FunctionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <FunctionProvider>
          <App />
        </FunctionProvider>        
      </DataProvider>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
