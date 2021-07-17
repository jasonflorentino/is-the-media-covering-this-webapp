/** Functions for strings */

/** 
 * @description Formats a number to be comma-separated 
 * @param {string | number} num A number to be formatted 
 * @returns {string} Comma-separated number as a string, or 
 * -1 if input isn't a string or number
 * */
export function formatNumber(num) {
  if (!assertNumberOrString(num)) return "-1";
  
  // Split and reverse string number
  const strarr = String(num).split("").reverse();
  let   output = [];

  // Build up output array, inserting a comma
  // after every 3 digits (and not before the first)
  for (let i = 0; i < strarr.length; i++) {
    if (i !== 0 && i % 3 === 0) output.push(",")
    output.push(strarr[i]);
  }

  // Reverse output arr and return as string
  return output.reverse().join("");
}

function assertNumberOrString(numOrStr) {
  return typeof numOrStr === typeof 1 
    || typeof numOrStr === typeof "a" 
}