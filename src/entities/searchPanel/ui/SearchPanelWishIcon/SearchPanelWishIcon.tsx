// react
import { FC } from 'react';
//assets
import LikeIcon from '@/shared/libs/assets/like.svg?react';
// styles
import styles from './SearchPanelWishIcon.module.scss';

interface SearchPanelWishIconProps {}

export const SearchPanelWishIcon: FC<SearchPanelWishIconProps> = ({}) => {
  return (
    <div className={styles.SearchPanelWishIcon}>
      <LikeIcon />
    </div>
  );
};
