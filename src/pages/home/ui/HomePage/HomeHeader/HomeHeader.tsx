// react
import { FC } from 'react';
import { useNavigate } from 'react-router';
//constants
import { getHomePage } from '@/shared/libs/constants/routes';
// styles
import styles from './HomeHeader.module.scss';

interface HomeHeaderProps {}

export const HomeHeader: FC<HomeHeaderProps> = ({}) => {
  const navigate = useNavigate();

  const onClickNavigateToHomePage = () => {
    navigate(getHomePage());
  };
  return (
    <div className={styles.HomeHeader}>
      <div className={styles.home_content}>
        <div className={styles.header_logo} onClick={onClickNavigateToHomePage}>
          <a href='#' className={styles.header_logo_link}>
            <img
              src='https://platinumchetvertinovskaya.com.ua/image/catalog/platinum-logo.png'
              alt='Logo'
              className={styles.header__logo_img}
              width='140'
            />
          </a>
        </div>
        <div className={styles.header_nav}>
          <ul>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Loyalty program</a>
            </li>
            <li>
              <a>Delivery and payment</a>
            </li>
            <li>
              <a>Brand ambassador</a>
            </li>
          </ul>
        </div>
        <div className={styles.header_button}>Call us</div>
      </div>
    </div>
  );
};
