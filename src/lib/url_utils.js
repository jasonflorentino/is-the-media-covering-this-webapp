const url_utils = {
  getQueriesFromLocationSearch
}

/** 
 * Convert search string from location.search
 * into object where object[query key] = query value
 */
function getQueriesFromLocationSearch(search) {
  const qArr = search.slice(1).split("&"); // ? is always in the 0th position
  const qDict = {};
  for (const query of qArr) {
    const q = query.split("=");
    qDict[decodeURIComponent(q[0])] = decodeURIComponent(q[1])
  }
  return qDict;
}

export default url_utils;