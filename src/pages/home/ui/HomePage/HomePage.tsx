// react
import { FC } from 'react';
//ui
import { HomeSearchPanel } from '../HomeSearchPanel';
// styles
import styles from './HomePage.module.scss';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className={styles.HomePage}>
      <HomeSearchPanel />
    </div>
  );
};
