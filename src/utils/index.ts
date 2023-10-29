import { format, isValid } from "date-fns";

export const INITIAL_FORMAT_DATE = 'dd MMMM yyyy';

export const formatDate = (
  date: Date | string | number,
  customFormat?: string
): string => {
  if (isValid(new Date(date))) {
    const formatToShow = customFormat || INITIAL_FORMAT_DATE;
    return format(new Date(date), formatToShow);
  }
  return '-';
};