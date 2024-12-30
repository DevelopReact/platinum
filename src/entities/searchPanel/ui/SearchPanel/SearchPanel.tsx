// react
import { ChangeEvent, FC, useEffect, useState } from 'react';
//lib
import classNames from 'classnames';
//api
import { useGetCategoriesQuery } from '@/entities/categories/api/categoriesAPI';
import { useGetProductsQuery } from '@/entities/products/api/productsAPI';
//ui
import { Loader } from '@/shared/ui/Loader';
import { SearchPanelDropdown } from '../SearchPanelDropdown/SearchPanelDropdown';
import { SearchPanelUserIcon } from '../SearchPanelUserIcon/SearchPanelUserIcon';
import { SearchPanelCartIcon } from '../SearchPanelCartIcon/SearchPanelCartIcon';
import { SearchPanelWishIcon } from '../SearchPanelWishIcon/SearchPanelWishIcon';
//hooks
import { useDebounce } from '@/shared/libs/hooks/useDebounce';
//assets
import SearchIcon from '@/shared/libs/assets/search.svg?react';
// styles
import styles from './SearchPanel.module.scss';

interface SearchPanelProps {}

export const SearchPanel: FC<SearchPanelProps> = ({}) => {
  const [isFocusInput, setIsFocusInput] = useState<boolean>(false);
  const [isSearchValue, setIsSearchValue] = useState<string>('');
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);

  const debounceSearchValue = useDebounce(isSearchValue, 1500);

  const skipRequestCondition = debounceSearchValue.length < 3 || !isFocusInput;

  const {
    data: categoriesData,
    isSuccess: isSuccessCategories,
    isLoading: isLoadingCategories,
    isFetching: isFetchingCategories
  } = useGetCategoriesQuery(
    {
      search: debounceSearchValue
    },
    { skip: skipRequestCondition }
  );

  const {
    data: productsData,
    isSuccess: isSuccessProducts,
    isLoading: isLoadingProducts,
    isFetching: isFetchingProducts
  } = useGetProductsQuery(
    {
      search: debounceSearchValue
    },
    { skip: skipRequestCondition }
  );

  const hasProducts = productsData?.items.length != 0;
  const hasCategories = categoriesData?.items.length != 0;

  const onFocusInput = () => {
    setIsFocusInput(true);

    if ((hasProducts || hasCategories) && isSearchValue.length >= 3) {
      setIsShowDropdown(true);
    }
  };

  const onBlurInput = () => {
    setTimeout(() => {
      setIsFocusInput(false);
      setIsShowDropdown(false);
    }, 100);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSearchValue(e.target.value);
  };

  useEffect(() => {
    if (
      ((isSuccessProducts && hasProducts) ||
        (isSuccessCategories && hasCategories)) &&
      !(isSearchValue.length < 3 || !isFocusInput)
    ) {
      setIsShowDropdown(true);
    } else {
      setIsShowDropdown(false);
    }
  }, [
    isSuccessProducts,
    isSuccessCategories,
    hasProducts,
    hasCategories,
    isFocusInput,
    isSearchValue
  ]);

  return (
    <div className={styles.SearchPanel}>
      <div className={styles.search_panel_content}>
        <div
          className={classNames(styles.wrapper_search_panel_input, {
            [styles.onFocusBorderInput]:
              isShowDropdown && isFocusInput && (hasProducts || hasCategories)
          })}
        >
          <div className={styles.search_panel_input}>
            <input
              type='text'
              placeholder='Search'
              onFocus={onFocusInput}
              onBlur={onBlurInput}
              onChange={onInputChange}
              value={isSearchValue}
            />
            {(isLoadingProducts ||
              isLoadingCategories ||
              isFetchingCategories ||
              isFetchingProducts) && <Loader />}
            <SearchIcon />
          </div>
          <SearchPanelDropdown
            isSuccess={isSuccessProducts}
            isSuccessCategories={isSuccessCategories}
            showDropdown={isShowDropdown}
            dataProducts={productsData?.items!}
            dataCategories={categoriesData?.items!}
            setIsSearchValue={setIsSearchValue}
            setIsShowDropdown={setIsShowDropdown}
          />
        </div>
        <div className={styles.search_panel_icon}>
          <SearchPanelUserIcon />
        </div>
        <div className={styles.search_panel_icon}>
          <SearchPanelCartIcon />
        </div>
        <div className={styles.search_panel_icon}>
          <SearchPanelWishIcon />
        </div>
      </div>
    </div>
  );
};
