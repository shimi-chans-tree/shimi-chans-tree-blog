import { showYearMonthDayLogic } from '../logic/DateLogic';

export const useDate = (param: string) => {
  const showYearMonthDate = showYearMonthDayLogic(param);
  return showYearMonthDate;
};
