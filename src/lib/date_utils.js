/** Functions for dates */
const sec  = 1000;
const min  = sec * 60;
const hr   = min * 60;
const day  = hr  * 24;
const wk   = day * 7;
const mon  = day * 30;
const year = day * 365;

/** 
 * @param {string} dateString A valid date string
 * @returns A string representing the given date relative to today. 
 * Returns an "unknown" if input is missing or falsy.
 */
export function getRelativeDate(dateString) {
  if (!dateString) return "Unknown publish date";

  const now  = Date.now();
  const then = new Date(dateString).valueOf();
  const diff = now - then;

  const yearDiff = Math.floor(diff / year);
  const monDiff  = Math.floor(diff / mon);
  const weekDiff = Math.floor(diff / wk);
  const dayDiff  = Math.floor(diff / day);

  return (
    yearDiff  >  1 ? `${yearDiff} years ago` :
    yearDiff === 1 ? `1 year ago` :
    monDiff   >  1 ? `${monDiff} months ago` :
    monDiff  === 1 ? `1 month ago` :
    weekDiff  >  1 ? `${weekDiff} weeks ago` :
    weekDiff === 1 ? `1 week ago` :
    dayDiff   >  1 ? `${dayDiff} days ago` :
    dayDiff  === 1 ? `1 day ago` :
    `today`
  )
}