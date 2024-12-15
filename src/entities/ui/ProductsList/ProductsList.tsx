// react
import { FC } from 'react';
//ui
import { ProductItem } from '../ProductItem';
//types
import { IProduct } from '@/entities/search/model/types/productTypes';
// styles
import styles from './ProductsList.module.scss';

interface ProductsListProps {
  data: IProduct[];
}

export const ProductsList: FC<ProductsListProps> = ({ data }) => {
  return (
    <div className={styles.ProductsList}>
      <div className={styles.titleList}>Products:</div>
      <div className={styles.content_product_list}>
        {data?.map(({ id, name, thumbnail, max_price, min_price }) => (
          <ProductItem
            key={id}
            name={name}
            img={thumbnail.src}
            max_price={max_price}
            min_price={min_price}
          />
        ))}
      </div>
    </div>
  );
};
