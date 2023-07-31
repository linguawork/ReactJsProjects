import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
//@ts-ignore
import App from './app/app';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
