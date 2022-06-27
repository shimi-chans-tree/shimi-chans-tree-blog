import dayjs from 'dayjs';
import 'dayjs/locale/ja';

// 日本語化
dayjs.locale(`ja`);

export const showYearMonthDayLogic = (date: string): string => {
  return dayjs(date).format('YYYY年M月D日');
};
