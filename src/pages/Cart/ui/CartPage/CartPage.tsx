// react
import { FC } from 'react';
//ui
import { CartList } from '../CartList';
// styles
import styles from './CartPage.module.scss';

interface CartPageProps {}

export const CartPage: FC<CartPageProps> = ({}) => {
  return (
    <div className={styles.CartPage}>
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
