import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

//I just added this ignoring typescript comment to avoid complaining of type any
//@ts-ignore
import App from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
