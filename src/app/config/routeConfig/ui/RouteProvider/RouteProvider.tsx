// react
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
//ui
import { PageLayout } from '@/app/layouts/ui/PageLayout';

import { Cart } from '@/pages/Cart';
//constants
import { getCartPage, getHomePage } from '@/shared/libs/constants/routes';
import { HomeHeader } from '@/pages/HomeHeader';
import { HomeSearchPanel } from '@/pages/HomeSearchPanel';

export const RouteProvider: FC = ({}) => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path={getHomePage()} element={<HomeSearchPanel />}></Route>
        <Route path={getCartPage()} element={<Cart />}></Route>
      </Route>
    </Routes>
  );
};
