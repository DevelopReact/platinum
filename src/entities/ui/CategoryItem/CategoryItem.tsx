// react
import { FC } from 'react';
// styles
import styles from './CategoryItem.module.scss';

interface CategoryItemProps {}

export const CategoryItem: FC<CategoryItemProps> = ({}) => {
  return <div className={styles.CategoryItem}>CategoryItem</div>;
};
