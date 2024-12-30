// react
import { FC } from 'react';
//assets
import UserIcon from '@/shared/libs/assets/user.svg?react';
// styles
import styles from './SearchPanelUserIcon.module.scss';

interface SearchPanelUserIconProps {}

export const SearchPanelUserIcon: FC<SearchPanelUserIconProps> = ({}) => {
  return (
    <div className={styles.SearchPanelUserIcon}>
      <UserIcon />
    </div>
  );
};
