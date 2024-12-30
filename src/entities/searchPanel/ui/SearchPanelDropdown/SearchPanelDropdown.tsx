// react
import { FC } from 'react';
//ui
import { CategoryList } from '@/entities/categories/ui/CategoryList';
import { ProductsList } from '@/entities/products/ui/ProductsList';
//types
import { IProduct } from '@/entities/products/model/types/productTypes';
import { ICategories } from '@/entities/categories/model/types/categoriesTypes';
// styles
import styles from './SearchPanelDropdown.module.scss';

interface SearchPanelDropdownProps {
  isSuccess: boolean;
  isSuccessCategories: boolean;
  showDropdown: boolean;
  dataProducts: IProduct[];
  dataCategories: ICategories[];
  setIsSearchValue: (isSearchValue: string) => void;
  setIsShowDropdown: (isShowDropdown: boolean) => void;
}

export const SearchPanelDropdown: FC<SearchPanelDropdownProps> = ({
  isSuccess,
  isSuccessCategories,
  showDropdown,
  dataProducts,
  dataCategories,
  setIsSearchValue,
  setIsShowDropdown
}) => {
  return (
    <div className={styles.SearchPanelDropdown}>
      {isSuccessCategories && dataCategories.length != 0 && showDropdown && (
        <CategoryList dataCategories={dataCategories!} />
      )}
      {isSuccess &&
        dataProducts.length != 0 &&
        showDropdown &&
        (dataProducts?.length != 0 || dataCategories?.length != 0) && (
          <ProductsList
            dataProducts={dataProducts!}
            setIsSearchValue={setIsSearchValue}
            setIsShowDropdown={setIsShowDropdown}
          />
        )}
    </div>
  );
};
