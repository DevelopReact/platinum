// react
import { FC } from 'react';
import { useDispatch } from 'react-redux';
//api
import { useLazyGetProductSlugQuery } from '../../api/productsAPI';
//slices
import { productCartAction } from '../../model/slice/productCartSlice';
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
  setIsSearchValue: (isSearchValue: string) => void;
  setIsShowDropdown: (isShowDropdown: boolean) => void;
}

export const ProductItem: FC<ProductItemProps> = ({
  slug,
  name,
  img,
  max_price,
  min_price,
  setIsSearchValue,
  setIsShowDropdown
}) => {
  const dispatch = useDispatch();

  const [triggerProductSlugQuery, { isLoading }] = useLazyGetProductSlugQuery();

  const onClickAddToCart = async () => {
    await triggerProductSlugQuery(slug)
      .unwrap()
      .then((data) => {
        if (data) {
          console.log('addToCart');
          dispatch(
            productCartAction.setProductCart({
              ...data
            })
          );
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsShowDropdown(false);
        setIsSearchValue('');
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
