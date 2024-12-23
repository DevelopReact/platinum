// react
import { FC } from 'react';
import { useDispatch } from 'react-redux';
//api
import { useLazyGetProductSlugQuery } from '../../api/searchAPI';
//slices
import { searchPanelAction } from '../../model/slices/searchPanelSlice';
import { productAction } from '../../model/slices/productSlice';
//ui
import { Loader } from '@/shared/ui/Loader';
// styles
import styles from './ProductItem.module.scss';

interface ProductItemProps {
  slug: string;
  name: string;
  img: string;
  max_price: number;
  min_price: number;
}

export const ProductItem: FC<ProductItemProps> = ({
  slug,
  name,
  img,
  max_price,
  min_price
}) => {
  const dispatch = useDispatch();

  const [triggerProductSlugQuery, { isLoading }] = useLazyGetProductSlugQuery();

  const onClickAddToCart = async () => {
    await triggerProductSlugQuery(slug)
      .unwrap()
      .then((data) => {
        if (data) {
          dispatch(
            productAction.setProducts({
              ...data,
              count: 1
            })
          );
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(searchPanelAction.setShowDropDown(false));
        dispatch(searchPanelAction.setSearchValue(''));
      });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.ProductItem} onClick={onClickAddToCart}>
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
