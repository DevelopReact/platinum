// react
import { FC } from 'react';
//ui
import { HomeHeader } from '../HomeHeader';
import { HomeSearchPanel } from '../HomeSearchPanel';
// styles
import styles from './Home.module.scss';

interface HomeProps {}

export const Home: FC<HomeProps> = ({}) => {
  return (
    <div className={styles.Home}>
      <HomeHeader />
      <HomeSearchPanel />
    </div>
  );
};
