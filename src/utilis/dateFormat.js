import { format } from "date-fns";

export const dateFormat = (dateStr) => {
  const date = new Date(dateStr);
  const formattedDate = format(date, "dd MMM, yyyy hh:mm a");
  return formattedDate;
};