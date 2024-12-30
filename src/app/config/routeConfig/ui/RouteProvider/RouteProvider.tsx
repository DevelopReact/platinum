// react
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
//ui
import { PageLayout } from '@/app/layouts/ui/PageLayout';
import { CartPage } from '@/pages/cart/ui/CartPage';
import { HomePage } from '@/pages/home/ui/HomePage';
//constants
import { getCartPage, getHomePage } from '@/shared/libs/constants/routes';

export const RouteProvider: FC = ({}) => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path={getHomePage()} element={<HomePage />}></Route>
        <Route path={getCartPage()} element={<CartPage />}></Route>
      </Route>
    </Routes>
  );
};
45;
