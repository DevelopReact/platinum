// react
import { FC } from 'react';
//ui
import { CategoryItem } from '../CategoryItem';
// styles
import styles from './CategoriesList.module.scss';

interface CategoriesListProps {}

export const CategoriesList: FC<CategoriesListProps> = ({}) => {
  return (
    <div className={styles.CategoriesList}>
      Categories
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </div>
  );
};
