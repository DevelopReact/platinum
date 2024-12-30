// react
import { FC } from 'react';
import { Outlet } from 'react-router';
//ui
import { HomeHeader } from '@/pages/home/ui/HomePage/HomeHeader';
// styles
import styles from './PageLayout.module.scss';

interface PageLayoutProps {}

export const PageLayout: FC<PageLayoutProps> = ({}) => {
  return (
    <div className={styles.PageLayout}>
      <HomeHeader />
      <Outlet />
    </div>
  );
};
