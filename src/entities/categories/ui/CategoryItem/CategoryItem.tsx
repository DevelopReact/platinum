// react
import { FC } from "react";
//assets
import SearchIcon from "@/shared/libs/assets/search.svg?react";
// styles
import styles from "./CategoryItem.module.scss";

interface CategoryItemProps {
  name: string;
}

export const CategoryItem: FC<CategoryItemProps> = ({ name }) => {
  return (
    <div className={styles.CategoryItem}>
      <div className={styles.icon_category_item}>
        <SearchIcon />
      </div>
      <div className={styles.title_category_item}>{name}</div>
    </div>
  );
};
