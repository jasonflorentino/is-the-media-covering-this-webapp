const MAX_PAGES_DEFAULT = 10;
const PAGES_TO_SHOW_DEFAULT = 5;

const utils = {
  MAX_PAGES_DEFAULT,
  PAGES_TO_SHOW_DEFAULT,
  makePageNumbersArray,
}

export default utils;

/**
 * Makes an array of page numbers where the current page is
 * centered if possible and the first and last page are always present
 * @param {number} currPage 
 * @param {number} pagesToShow 
 * @param {number} maxPages 
 * @returns {number[]} Array of pages numbers to show
 * @example makePageNumbersArray(4, 5, 9) // Returns [1, 3, 4, 5, 9]
 */
function makePageNumbersArray(
  currPage,
  pagesToShow = PAGES_TO_SHOW_DEFAULT,
  maxPages = MAX_PAGES_DEFAULT
) {
  const pages = [];
  // Count always includes first and last page
  pagesToShow = pagesToShow - 2;
  // Start page num of the last possible set
  const lastSetStart = maxPages - pagesToShow;
  // Starting page number
  let page =
    // If current page is not in the last possible set
    currPage <= maxPages - pagesToShow
    // Start half way down from currPage
      ? currPage - Math.floor(pagesToShow / 2)
    // Else start from last possible set
      : lastSetStart;
  // While we still have space for page numbers
  while (pages.length < pagesToShow) {
    // Break if more pages aren't aloud
    if (page === maxPages) break;
    // Avoid page number 1 or pages >= max
    if (page > 1 && page < maxPages) pages.push(page);
    page++;
  }

  return [1, ...pages, maxPages];
}
