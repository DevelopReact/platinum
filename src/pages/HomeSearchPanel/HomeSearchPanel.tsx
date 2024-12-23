// react
import { FC } from 'react';
//ui
import { SearchPanel } from '@/entities/search/ui/SearchPanel';
// styles
import styles from './HomeSearchPanel.module.scss';

interface HomeSearchPanelProps {}

export const HomeSearchPanel: FC<HomeSearchPanelProps> = ({}) => {
  return (
    <div className={styles.HomeSearchPanel}>
      <SearchPanel />
    </div>
  );
};
