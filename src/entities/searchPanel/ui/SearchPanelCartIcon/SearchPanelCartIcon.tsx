// react
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
//selectors
import { getProductsCartState } from '@/entities/products/model/selector/getProductsCartState';
//ui
import { Counter } from '@/shared/ui/Counter';
//constants
import { getCartPage } from '@/shared/libs/constants/routes';
//assets
import ShopBasketIcon from '@/shared/libs/assets/shopping.svg?react';
// styles
import styles from './SearchPanelCartIcon.module.scss';

interface SearchPanelCartIconProps {}

export const SearchPanelCartIcon: FC<SearchPanelCartIconProps> = ({}) => {
  const navigate = useNavigate();

  const products = useSelector(getProductsCartState);

  const onClickNavigateToCart = () => {
    navigate(getCartPage());
  };

  return (
    <div className={styles.SearchPanelCartIcon} onClick={onClickNavigateToCart}>
      <ShopBasketIcon />
      {products.length && <Counter count={products.length} />}
    </div>
  );
};
