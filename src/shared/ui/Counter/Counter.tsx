// react
import { FC } from 'react';
// styles
import styles from './Counter.module.scss';

interface CounterProps {
  count: number;
}

export const Counter: FC<CounterProps> = ({ count }) => {
  return <div className={styles.Counter}>{count}</div>;
};
