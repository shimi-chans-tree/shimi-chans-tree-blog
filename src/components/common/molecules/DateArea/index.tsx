import React from 'react';
import { FcClock } from 'react-icons/fc';
/* hooks */
import { useDate } from '../../../../hooks/useDate';

/* styles */
import styles from './styles.module.scss';

export type DateAreaProps = {
  date: string;
  size?: number;
};

export const DateArea: React.FC<DateAreaProps> = (props: DateAreaProps) => {
  /* props */
  const { date, size } = props;
  /* hooks */
  const showYearMonthDate = useDate(date);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <FcClock size={size} />
      </div>

      <p className={styles.date}>{showYearMonthDate}</p>
    </div>
  );
};
