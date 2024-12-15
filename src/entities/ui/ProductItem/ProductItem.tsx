// react
import { FC } from 'react';
// styles
import styles from './ProductItem.module.scss';

interface ProductItemProps {
  name: string;
  img: string;
  max_price: number;
  min_price: number;
}

export const ProductItem: FC<ProductItemProps> = ({
  name,
  img,
  max_price,
  min_price
}) => {
  return (
    <div className={styles.ProductItem}>
      <div className={styles.icon_product_item}>
        <img src={img} />
      </div>
      <div className={styles.title_product_item}>
        <div className={styles.name_product_item}>{name}</div>
        <div className={styles.price_product_item}>
          <div className={styles.min_price_product_item}>
            {min_price}&nbsp;zł
          </div>
          {min_price < max_price && (
            <div className={styles.max_price_product_item}>
              {max_price}&nbsp;zł
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
