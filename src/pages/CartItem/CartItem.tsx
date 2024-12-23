// react
import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//actions
import { productAction } from '@/entities/search/model/slices/productSlice';
//selectors
import { getProductState } from '@/entities/search/model/selectors/getProductsState';
//assets
import Delete from '@/shared/libs/assets/delete.svg?react';
// styles
import styles from './CartItem.module.scss';

interface CartItemProps {
  id: number;
  name: string;
  thumbnail: { src: string };
  max_price: number;
  min_price: number;
  count: number;
}

export const CartItem: FC<CartItemProps> = ({
  id,
  name,
  thumbnail,
  max_price,
  min_price,
  count
}) => {
  const dispatch = useDispatch();

  const productsCart = useSelector(getProductState);

  const [showCancelButton, setShowCancelButton] = useState<boolean>(false);

  const updateProductsCart = (updateCount: number) => {
    const newProductsCart = productsCart.map((product) =>
      product.id === id
        ? {
            ...product,
            count: updateCount
          }
        : product
    );

    dispatch(productAction.updateProducts(newProductsCart));
  };

  const onClickIncreaseCount = () => {
    if (count >= 1) {
      updateProductsCart(count + 1);
    }
  };

  const onClickDecreaseCount = () => {
    if (count > 1) {
      updateProductsCart(count - 1);
    }
  };

  const handleMouseEnter = () => {
    setShowCancelButton(!showCancelButton);
  };
  const handleMouseLeave = () => {
    setShowCancelButton(!showCancelButton);
  };

  const deleteProduct = () => {
    const newProductsCart = productsCart.filter((product) => product.id !== id);

    dispatch(productAction.updateProducts(newProductsCart));
  };

  return (
    <div
      className={styles.CartItem}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div className={styles.headerCart}>
        <div className={styles.iconHeader}>
          <img src={thumbnail.src} />
        </div>
        <div className={styles.nameHeader}>{name}</div>
        <div className={styles.priceHeader}>
          {min_price.toFixed(2) || max_price.toFixed(2)}
        </div>
        <div className={styles.countHeader}>
          <div
            className={styles.toggleCount}
            onClick={() => onClickIncreaseCount()}
          >
            +
          </div>
          {count}
          <div
            className={styles.toggleCount}
            onClick={() => onClickDecreaseCount()}
          >
            -
          </div>
        </div>
        <div className={styles.subtotalHeader}>
          {((min_price || max_price) * count).toFixed(2)}
        </div>
      </div>
      {showCancelButton && (
        <div className={styles.deleteButton} onClick={() => deleteProduct()}>
          <Delete />
        </div>
      )}
    </div>
  );
};
