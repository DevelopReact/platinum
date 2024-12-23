import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
//app
import App from './app/App.tsx';
//providers
import { StoreProvider } from './app/providers/store/StoreProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>
);
