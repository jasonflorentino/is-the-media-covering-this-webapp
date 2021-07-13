/** Functions for strings */

/** Formats a number to be comma-separated */
export function formatNumber(num) {
  if (!assertNumberOrString(num)) return "-1";
  
  const strarr = String(num).split("").reverse();
  let   output = [];

  for (let i = 0; i < strarr.length; i++) {
    if (i !== 0 && i % 3 === 0) output.push(",")
    output.push(strarr[i]);
  }

  return output.reverse().join("");
}

function assertNumberOrString(numOrStr) {
  return typeof numOrStr === typeof 1 
    || typeof numOrStr === typeof "a" 
}