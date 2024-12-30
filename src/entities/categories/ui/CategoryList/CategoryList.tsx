// react
import { FC } from 'react';
//ui
import { CategoryItem } from '../CategoryItem';
//types
import { ICategories } from '../../model/types/categoriesTypes';
// styles
import styles from './CategoryList.module.scss';

interface CategoryListProps {
  dataCategories: ICategories[];
}

export const CategoryList: FC<CategoryListProps> = ({ dataCategories }) => {
  return (
    <div className={styles.CategoryList}>
      <div className={styles.titleList}>Categories:</div>
      <div className={styles.content_categories_list}>
        {dataCategories?.map(({ id, name }) => (
          <CategoryItem key={id} name={name} />
        ))}
      </div>
    </div>
  );
};
