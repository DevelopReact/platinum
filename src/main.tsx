import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
//app
import App from './app/App.tsx';
//providers
import { StoreProvider } from './app/providers/store/StoreProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
