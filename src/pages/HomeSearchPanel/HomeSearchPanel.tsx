// react
import { FC } from 'react';
//ui
import { SearchPanel } from '@/entities/ui/SearchPanel';
// styles
import styles from './HomeSearchPanel.module.scss';

interface HomeSearchPanelProps {}

export const HomeSearchPanel: FC<HomeSearchPanelProps> = ({}) => {
  return (
    <div className={styles.HomeSearchPanel}>
      <SearchPanel />
      <div className={styles.add_to_basket}>Add to basket</div>
    </div>
  );
};
