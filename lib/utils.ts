import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimeStamp = (createdAt: Date): string => {
  const now = new Date();
  const elapsedTime = now.getTime() - createdAt.getTime();

  // Define time units in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;

  // Calculate the elapsed time in different units
  const yearsAgo = Math.floor(elapsedTime / year);
  const monthsAgo = Math.floor(elapsedTime / month);
  const weeksAgo = Math.floor(elapsedTime / week);
  const daysAgo = Math.floor(elapsedTime / day);
  const hoursAgo = Math.floor(elapsedTime / hour);
  const minutesAgo = Math.floor(elapsedTime / minute);

  // Return the formatted timestamp
  if (yearsAgo >= 1) {
    return yearsAgo === 1 ? "1 year ago" : `${yearsAgo} years ago`;
  } else if (monthsAgo >= 1) {
    return monthsAgo === 1 ? "1 month ago" : `${monthsAgo} months ago`;
  } else if (weeksAgo >= 1) {
    return weeksAgo === 1 ? "1 week ago" : `${weeksAgo} weeks ago`;
  } else if (daysAgo >= 1) {
    return daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
  } else if (hoursAgo >= 1) {
    return hoursAgo === 1 ? "1 hour ago" : `${hoursAgo} hours ago`;
  } else if (minutesAgo >= 1) {
    return minutesAgo === 1 ? "1 minute ago" : `${minutesAgo} minutes ago`;
  } else {
    return "Just now";
  }
};

export const formatNumber = (number: number): string => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(2) + "m";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(2) + "k";
  } else {
    return number.toString();
  }
};
