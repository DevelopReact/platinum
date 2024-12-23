// react
import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//lib
import classNames from 'classnames';
//api
import {
  useGetCategoriesQuery,
  useGetProductsQuery
} from '@/entities/search/api/searchAPI';
//slices
import { searchPanelAction } from '../../model/slices/searchPanelSlice';
//selectors
import { getProductState, getSearchPanelState } from '../../model/selectors';
//ui
import { ProductsList } from '../ProductsList';
import { Loader } from '@/shared/ui/Loader';
//hooks
import { useDebounce } from '@/shared/libs/hooks/useDebounce';
//assets
import UserIcon from '@/shared/libs/assets/user.svg?react';
import ShopBasketIcon from '@/shared/libs/assets/shopping.svg?react';
import LikeIcon from '@/shared/libs/assets/like.svg?react';
import SearchIcon from '@/shared/libs/assets/search.svg?react';
// styles
import styles from './SearchPanel.module.scss';
import { Counter } from '@/shared/ui/Counter';
import { useNavigate } from 'react-router';
import { getCartPage } from '@/shared/libs/constants/routes';

interface SearchPanelProps {}

export const SearchPanel: FC<SearchPanelProps> = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { showDropdown, searchValue } = useSelector(getSearchPanelState);
  const products = useSelector(getProductState);

  const debounceSearchValue = useDebounce(searchValue, 1500);

  const {
    data: categoriesData,
    isSuccess: isSuccessCategories,
    isLoading: isLoadingCategories
  } = useGetCategoriesQuery(undefined, {
    skip: debounceSearchValue.length < 3 || !showDropdown
  });

  const { data, isSuccess, isLoading } = useGetProductsQuery(undefined, {
    skip: debounceSearchValue.length < 3 || !showDropdown
  });

  const filteredCategoriesData = categoriesData?.items.filter((item: any) =>
    item.name.toLowerCase().includes(debounceSearchValue.toLowerCase())
  );

  const filteredProductsData = data?.items.filter((item: any) =>
    item.name.toLowerCase().includes(debounceSearchValue.toLowerCase())
  );

  const onDropdownFocus = () => {
    dispatch(searchPanelAction.setShowDropDown(true));
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchPanelAction.setSearchValue(e.target.value));
  };

  const onClickNavigateToCart = () => {
    navigate(getCartPage());
  };

  return (
    <div className={styles.SearchPanel}>
      <div className={styles.search_panel_content}>
        <div
          className={classNames(styles.wrapper_search_panel_input, {
            [styles.onFocusBorderInput]:
              isSuccess &&
              (filteredProductsData?.length != 0 ||
                filteredCategoriesData?.length != 0)
          })}
        >
          <div className={styles.search_panel_input}>
            <input
              type='text'
              placeholder='Search'
              onFocus={onDropdownFocus}
              onChange={onInputChange}
              value={searchValue}
            />
            {isLoading || (isLoadingCategories && <Loader />)}
            <SearchIcon />
          </div>
          {(isSuccess || isSuccessCategories) &&
            showDropdown &&
            (filteredProductsData?.length != 0 ||
              filteredCategoriesData?.length != 0) && (
              <ProductsList
                dataProducts={filteredProductsData!}
                dataCategories={filteredCategoriesData!}
              />
            )}
        </div>
        <div className={styles.search_panel_icon}>
          <UserIcon />
        </div>
        <div
          className={styles.search_panel_icon}
          onClick={onClickNavigateToCart}
        >
          <ShopBasketIcon />
          {products.length && <Counter count={products.length} />}
        </div>
        <div className={styles.search_panel_icon}>
          <LikeIcon />
        </div>
      </div>
    </div>
  );
};
