// react
import { ChangeEvent, FC, useState } from "react";
//api
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
} from "@/entities/search/api/searchAPI";
//lib
import classNames from "classnames";
//ui
import { ProductsList } from "../ProductsList";
import { Loader } from "@/shared/ui/Loader";
//hooks
import { useDebounce } from "@/shared/libs/hooks/useDebounce";
//assets
import UserIcon from "@/shared/libs/assets/user.svg?react";
import ShopBasketIcon from "@/shared/libs/assets/shopping.svg?react";
import LikeIcon from "@/shared/libs/assets/like.svg?react";
import SearchIcon from "@/shared/libs/assets/search.svg?react";
// styles
import styles from "./SearchPanel.module.scss";

interface SearchPanelProps {}

export const SearchPanel: FC<SearchPanelProps> = ({}) => {
  const [showDropdown, setShowDropDown] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const debounceSearchValue = useDebounce(searchValue, 1500);

  const {
    data: categoriesData,
    isSuccess: isSuccessCategories,
    isLoading: isLoadingCategories,
  } = useGetCategoriesQuery(undefined, {
    skip: debounceSearchValue.length < 3 || !showDropdown,
  });

  const { data, isSuccess, isLoading } = useGetProductsQuery(undefined, {
    skip: debounceSearchValue.length < 3 || !showDropdown,
  });

  const filteredCategoriesData = categoriesData?.items.filter((item: any) =>
    item.name.toLowerCase().includes(debounceSearchValue.toLowerCase())
  );

  const filteredProductsData = data?.items.filter((item: any) =>
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
            [styles.onFocusBorderInput]:
              isSuccess &&
              (filteredProductsData?.length != 0 ||
                filteredCategoriesData?.length != 0),
          })}
        >
          <div className={styles.search_panel_input}>
            <input
              type="text"
              placeholder="Search"
              onFocus={onDropdownFocus}
              onBlur={onDropdownBlur}
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
