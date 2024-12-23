// react
import { FC } from 'react';
//ui
import { ProductItem } from '../ProductItem';
import { CategoryItem } from '../CategoryItem';
//types
import {
  ICategories,
  IProduct
} from '@/entities/search/model/types/productTypes';
// styles
import styles from './ProductsList.module.scss';

interface ProductsListProps {
  dataProducts: IProduct[];
  dataCategories: ICategories[];
}

export const ProductsList: FC<ProductsListProps> = ({
  dataProducts,
  dataCategories
}) => {
  return (
    <div className={styles.ProductsList}>
      <div className={styles.titleList}>Categories:</div>
      <div className={styles.content_categories_list}>
        {dataCategories?.map(({ id, name }) => (
          <CategoryItem key={id} name={name} />
        ))}
      </div>
      <div className={styles.titleList}>Products:</div>
      <div className={styles.content_product_list}>
        {dataProducts?.map(
          ({ id, name, thumbnail, max_price, min_price, slug }) => (
            <ProductItem
              key={id}
              slug={slug}
              name={name}
              img={thumbnail.src}
              max_price={max_price}
              min_price={min_price}
            />
          )
        )}
      </div>
    </div>
  );
};
