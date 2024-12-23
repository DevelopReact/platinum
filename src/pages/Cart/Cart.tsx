// react
import { FC } from 'react';
//ui
import { CartList } from '../CartList';
// styles
import styles from './Cart.module.scss';

interface CartProps {}

export const Cart: FC<CartProps> = ({}) => {
  return (
    <div className={styles.Cart}>
      <div className={styles.headerCart}>
        <div className={styles.iconHeader}>Picture</div>
        <div className={styles.nameHeader}>Name</div>
        <div className={styles.priceHeader}>Price</div>
        <div className={styles.countHeader}>Count</div>
        <div className={styles.subtotalHeader}>Subtotal</div>
      </div>
      <CartList />
    </div>
  );
};
