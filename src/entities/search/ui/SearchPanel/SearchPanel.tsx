// react
import { ChangeEvent, FC, useEffect, useState } from 'react';
//lib
import classNames from 'classnames';
//assets
import UserIcon from '@/shared/libs/assets/user.svg?react';
import ShopBasketIcon from '@/shared/libs/assets/shopping.svg?react';
import LikeIcon from '@/shared/libs/assets/like.svg?react';
import SearchIcon from '@/shared/libs/assets/search.svg?react';
// styles
import styles from './SearchPanel.module.scss';
import { useGetProductsQuery } from '@/entities/search/api/searchAPI';
import { ProductsList } from '../ProductsList';
import { useDebounce } from '@/shared/libs/hooks/useDebounce';
import { Loader } from '@/shared/ui/Loader';

interface SearchPanelProps {}

export const SearchPanel: FC<SearchPanelProps> = ({}) => {
  const [showDropdown, setShowDropDown] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const debounceSearchValue = useDebounce(searchValue, 1500);

  const { data, isSuccess, isLoading } = useGetProductsQuery(undefined, {
    skip: debounceSearchValue.length < 3 || !showDropdown
  });

  const filteredData = data?.items.filter((item: any) =>
    item.name.toLowerCase().includes(debounceSearchValue.toLowerCase())
  );

  const onDropdownFocus = () => {
    setShowDropDown(true);
  };

  const onDropdownBlur = () => {
    setShowDropDown(false);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.SearchPanel}>
      <div className={styles.search_panel_content}>
        <div
          className={classNames(styles.wrapper_search_panel_input, {
            [styles.onFocusBorderInput]: isSuccess && filteredData?.length != 0 
          })}
        >
          <div className={styles.search_panel_input}>
            <input
              type='text'
              placeholder='Search'
              onFocus={onDropdownFocus}
              onBlur={onDropdownBlur}
              onChange={onInputChange}
              value={searchValue}
            />
            {isLoading && <Loader/>}
            <SearchIcon />
          </div>
          {isSuccess && showDropdown && filteredData?.length != 0 && <ProductsList data={filteredData!} />}
        </div>
        <div className={styles.search_panel_icon}>
          <UserIcon />
        </div>
        <div className={styles.search_panel_icon}>
          <ShopBasketIcon />
        </div>
        <div className={styles.search_panel_icon}>
          <LikeIcon />
        </div>
      </div>
    </div>
  );
};
