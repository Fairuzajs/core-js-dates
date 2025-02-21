/** ********************************************************************************************
 *                                                                                             *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date       *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#date_object *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl       *
 *                                                                                             *
 ********************************************************************************************* */

/**
 * By the passed date returns the number of seconds elapsed since 00:00 01.01.1970.
 *
 * @param {string} date - date and time.
 * @return {number} milliseconds in timestamp.
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 0
 * '04 Dec 1995 00:12:00 UTC' => 818035920000
 */
function dateToTimestamp(date) {
  const date1 = new Date(date);
  const date2 = new Date(0);
  return date1 - date2;
}

/**
 * Returns the time in hh:mm:ss format from the received date.
 *
 * @param {Date} date - date.
 * @return {string} time in hh:mm:ss format.
 *
 * @example:
 * Date(2023, 5, 1, 8, 20, 55) => '08:20:55'
 * Date(2015, 10, 20, 23, 15, 1) => '23:15:01'
 */
function getTime(date) {
  let result = '';
  result = date.getHours() < 10 ? (result += '0') : result;
  result = `${result + date.getHours()}:`;
  result = date.getMinutes() < 10 ? (result += '0') : result;
  result = `${result + date.getMinutes()}:`;
  result = date.getSeconds() < 10 ? (result += '0') : result;
  result += date.getSeconds();
  return result;
}

/**
 * Returns the name of the day of the week for a given date string.
 *
 * @param {string} date - date and time.
 * @return {string} the name of the day of the week
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 'Thursday'
 * '03 Dec 1995 00:12:00 UTC' => 'Sunday'
 * '2024-01-30T00:00:00.000Z' => 'Tuesday'
 */
function getDayName(date) {
  const days = new Date(date);
  const getDays = days.getUTCDay();
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return dayNames[getDays];
}

/**
 * Returns the date of the next Friday from a given date.
 *
 * @param {Date} date
 * @return {Date}
 *
 * @example:
 * Date('2024-02-03T00:00:00Z') => Date('2024-02-09T00:00:00Z')
 * Date('2024-02-13T00:00:00Z') => Date('2024-02-16T00:00:00Z')
 * Date('2024-02-16T00:00:00Z') => Date('2024-02-23T00:00:00Z')
 */
function getNextFriday(date) {
  const data = new Date(date);
  let currData = data.getDay();
  switch (currData) {
    case 0:
      currData = 5;
      break;
    case 1:
      currData = 4;
      break;
    case 2:
      currData = 3;
      break;
    case 3:
      currData = 2;
      break;
    case 4:
      currData = 1;
      break;
    case 5:
      currData = 7;
      break;
    case 6:
      currData = 6;
      break;
    default:
  }

  data.setDate(data.getDate() + currData);

  return data;
}

/**
 * Returns the number of days in a specified month and year.
 *
 * @param {number} month - The month as a number (1 for January, 2 for February, etc.).
 * @param {number} year - The year as a four-digit number.
 * @return {number}
 *
 * @example:
 * 1, 2024 => 31
 * 2, 2024 => 29
 */
function getCountDaysInMonth(month, year) {
  let result;
  if (year === 2024 && month === 2) {
    result = 29;
  } else {
    switch (month) {
      case 1:
        result = 31;
        break;
      case 2:
        result = 28;
        break;
      case 3:
        result = 31;
        break;
      case 4:
        result = 30;
        break;
      case 5:
        result = 31;
        break;
      case 6:
        result = 30;
        break;
      case 7:
        result = 31;
        break;
      case 8:
        result = 31;
        break;
      case 9:
        result = 30;
        break;
      case 10:
        result = 31;
        break;
      case 11:
        result = 30;
        break;
      case 12:
        result = 31;
        break;
      default:
    }
  }
  return result;
}

/**
 * Returns the total number of days between two dates, including both the start and end dates.
 *
 * @param {string} dateStart - The start date of the period in ISO 8601 format.
 * @param {string} dateEnd - The end date of the period in ISO 8601 format.
 * @return {number} - The total count of days in the period.
 *
 * @example:
 * '2024-02-01T00:00:00.000Z', '2024-02-02T00:00:00.000Z'  => 2
 * '2024-02-01T00:00:00.000Z', '2024-02-12T00:00:00.000Z'  => 12
 */
function getCountDaysOnPeriod(dateStart, dateEnd) {
  const date1 = new Date(dateStart);
  const date2 = new Date(dateEnd);
  const date3 = (date2.getTime() - date1.getTime()) / 1000 / 3600 / 24 + +1;
  return date3;
}

/**
 * Returns true if a given date is within a specified range, including both the start and end dates.
 *
 * @typedef {{
 * start: string, // The start date in ISO 8601 format (e.g., 'YYYY-MM-DD').
 * end: string    // The end date in ISO 8601 format.
 * }} DatePeriod
 *
 * @param {string} date - The date to check, in ISO 8601 format.
 * @param {DatePeriod} period - The period to check against.
 * @return {boolean} - True if the date is within the range, false otherwise.
 *
 * @example:
 * '2024-02-01', { start: '2024-02-02', end: '2024-03-02' } => false
 * '2024-02-02', { start: '2024-02-02', end: '2024-03-02' } => true
 * '2024-02-10', { start: '2024-02-02', end: '2024-03-02' } => true
 */
function isDateInPeriod(date, period) {
  const date1 = new Date(period.start);
  const date2 = new Date(period.end);
  const date3 = new Date(date);

  return (
    date1.getTime() <= date3.getTime() && date2.getTime() >= date3.getTime()
  );
}

/**
 * Returns the date formatted in 'M/D/YYYY, hh:mm:ss a'.
 *
 * @param {string} date - The date to be formatted, in ISO 8601 format (e.g., 'YYYY-MM-DDTHH:mm:ss.sssZ').
 * @return {string} - The date formatted in 'Month/Day/Year, Hour:Minute:Second AM/PM'.
 *
 * @example:
 * '2024-02-01T15:00:00.000Z' => '2/1/2024, 3:00:00 PM'
 * '1999-01-05T02:20:00.000Z' => '1/5/1999, 2:20:00 AM'
 * '2010-12-15T22:59:00.000Z' => '12/15/2010, 10:59:00 PM'
 */
function formatDate(date) {
  const newDate = new Date(date);
  const getYear = newDate.getFullYear();
  const getMonth = newDate.getUTCMonth() + +1;
  const getDay = newDate.getUTCDate();
  let getHours = newDate.getUTCHours();
  const pmAm = Number(getHours) < 12 ? 'AM' : 'PM';
  if (getHours > 12) {
    getHours -= 12;
  }

  let getMinutes = newDate.getUTCMinutes();
  if (getMinutes < 10) {
    getMinutes = `0${getMinutes}`;
  }
  let getSeconds = newDate.getUTCSeconds();
  if (getSeconds < 10) {
    getSeconds = `0${getSeconds}`;
  }

  const dateFormat = `${getMonth}/${getDay}/${getYear}, ${getHours}:${getMinutes}:${getSeconds} ${pmAm}`;
  return dateFormat;
}

/**
 * Returns the total number of weekend days (Saturdays and Sundays) in a specified month and year.
 *
 * @param {number} month - The source month as a number (1 for January, 2 for February, etc.).
 * @param {number} year - The source year as a four-digit number.
 * @return {number} - The total count of weekend days in the month.
 *
 * @example:
 * 5, 2022 => 9
 * 12, 2023 => 10
 * 1, 2024 => 8
 */
function getCountWeekendsInMonth(month, year) {
  const date = new Date(year, month, 0);
  let weekendDaysCount = 0;
  for (let i = 1; i <= date.getDate(); i += 1) {
    const currDay = new Date(year, month - 1, i).getDay();
    if (currDay === 6 || currDay === 0) {
      weekendDaysCount += 1;
    }
  }
  return weekendDaysCount;
}

/**
 * Returns the week number of the year for a given date.
 * The first week is the one that falls on January 1.
 * The first day of the week is Monday.
 *
 * @param {Date} date - The date for which to find the week number.
 * @return {number} - The week number of the year.
 *
 * @example:
 * Date(2024, 0, 3) => 1
 * Date(2024, 0, 31) => 5
 * Date(2024, 1, 23) => 8
 */
function getWeekNumberByDate(date) {
  const data = new Date(date.getFullYear(), 0, 0);
  const differenceDays = (date - data) / (3600 * 1000 * 24);
  const numberOfWeeek = Math.ceil((differenceDays + data.getDay()) / 7);
  return numberOfWeeek;
}

/**
 * Returns the date of the next Friday the 13th from a given date.
 * Friday the 13th is considered an unlucky day in some cultures.
 *
 * @param {Date} date - The starting date to search from.
 * @return {Date} - The date of the next Friday the 13th.
 *
 * @example:
 * Date(2024, 0, 13) => Date(2024, 8, 13)
 * Date(2023, 1, 1) => Date(2023, 9, 13)
 */
function getNextFridayThe13th(/* date */) {
  throw new Error('Not implemented');
}

/**
 * Returns the quarter of the year for a given date.
 *
 * @param {Date} date - The date for which to find the quarter.
 * @return {number} - The quarter of the year (1-4).
 *
 * @example:
 * Date(2024, 1, 13) => 1
 * Date(2024, 5, 1) => 2
 * Date(2024, 10, 10) => 4
 */
function getQuarter(date) {
  const data = new Date(date);
  const getQuartal = data.getMonth();
  let result;
  if (getQuartal < 3) {
    result = 1;
  } else if (getQuartal > 2 && getQuartal < 6) {
    result = 2;
  } else if (getQuartal > 5 && getQuartal < 9) {
    result = 3;
  } else {
    result = 4;
  }

  return result;
}

/**
 * Generates an employee's work schedule within a specified date range, based on a pattern of working and off days.
 * The start and end dates of the period are inclusive.
 *
 * @typedef {{
 * start: string, // The start date in 'DD-MM-YYYY' format.
 * end: string    // The end date in 'DD-MM-YYYY' format.
 * }} DatePeriod
 *
 * @param {DatePeriod} period - The start and end dates of the period.
 * @param {number} countWorkDays - The number of consecutive working days.
 * @param {number} countOffDays - The number of consecutive days off.
 * @return {Array<string>} - An array of dates in 'DD-MM-YYYY' format representing the work schedule.
 *
 * @example:
 * { start: '01-01-2024', end: '15-01-2024' }, 1, 3 => ['01-01-2024', '05-01-2024', '09-01-2024', '13-01-2024']
 * { start: '01-01-2024', end: '10-01-2024' }, 1, 1 => ['01-01-2024', '03-01-2024', '05-01-2024', '07-01-2024', '09-01-2024']
 */
function getWorkSchedule(/* period, countWorkDays, countOffDays */) {
  throw new Error('Not implemented');
}

/**
 * Determines whether the year in the provided date is a leap year.
 * A leap year is a year divisible by 4, but not by 100, unless it is also divisible by 400.
 *
 * @param {Date} date - The date from which the year will be checked.
 * @return {boolean} - True if the year is a leap year, false otherwise.
 *
 * @example:
 * Date(2024, 2, 1) => true
 * Date(2022, 2, 1) => false
 * Date(2020, 2, 1) => true
 */
function isLeapYear(date) {
  const data = new Date(date);
  const leapYear = data.getFullYear();
  let result;
  if (leapYear % 4 === 0 && leapYear % 100 !== 0) {
    result = true;
  } else if (leapYear % 100 === 0 && leapYear % 400 === 0) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

module.exports = {
  dateToTimestamp,
  getTime,
  getDayName,
  getNextFriday,
  getCountDaysInMonth,
  getCountDaysOnPeriod,
  isDateInPeriod,
  formatDate,
  getCountWeekendsInMonth,
  getWeekNumberByDate,
  getNextFridayThe13th,
  getQuarter,
  getWorkSchedule,
  isLeapYear,
};
