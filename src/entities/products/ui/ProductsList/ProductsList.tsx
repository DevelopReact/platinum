// react
import { FC } from 'react';
//ui
import { ProductItem } from '../ProductItem';
//types
import { IProduct } from '@/entities/products/model/types/productTypes';
// styles
import styles from './ProductsList.module.scss';

interface ProductsListProps {
  dataProducts: IProduct[];
  setIsSearchValue: (isSearchValue: string) => void;
  setIsShowDropdown: (isShowDropdown: boolean) => void;
}

export const ProductsList: FC<ProductsListProps> = ({
  dataProducts,
  setIsSearchValue,
  setIsShowDropdown
}) => {
  return (
    <div className={styles.ProductsList}>
      <div className={styles.titleList}>Products:</div>
      <div className={styles.content_product_list}>
        {dataProducts?.map(
          ({ id, name, thumbnail, max_price, min_price, slug }) => (
            <ProductItem
              key={id}
              slug={slug}
              name={name}
              img={thumbnail?.src}
              max_price={max_price}
              min_price={min_price}
              setIsSearchValue={setIsSearchValue}
              setIsShowDropdown={setIsShowDropdown}
            />
          )
        )}
      </div>
    </div>
  );
};
