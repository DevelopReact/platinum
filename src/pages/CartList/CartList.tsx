// react
import { FC } from 'react';
import { useSelector } from 'react-redux';
//selectors
import { getProductState } from '@/entities/search/model/selectors';
//ui
import { CartItem } from '../CartItem';
// styles
import styles from './CartList.module.scss';

interface CartListProps {}

export const CartList: FC<CartListProps> = ({}) => {
  const productsCart = useSelector(getProductState);

  const total = productsCart
    ?.map(({ max_price, min_price, count }) =>
      Number((min_price || max_price) * count!)
    )
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  return (
    <div className={styles.CartList}>
      {productsCart?.map(
        ({ id, name, thumbnail, max_price, min_price, count }) => (
          <CartItem
            key={id}
            id={id}
            name={name}
            thumbnail={thumbnail}
            max_price={max_price}
            min_price={min_price}
            count={count!}
          />
        )
      )}
      <div className={styles.total}>
        Total:<span>{total}</span>
      </div>
    </div>
  );
};
