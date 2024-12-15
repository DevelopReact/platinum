// react
import { FC, ReactNode } from 'react';
// redux
import { Provider } from 'react-redux';
//store
import { createStore } from '@/app/config/store/createStore';

interface StoreProviderProps {
  children: ReactNode;
}

const store = createStore();

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}> {children} </Provider>;
};
