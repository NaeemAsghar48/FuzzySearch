interface fuzzysearchOptions {
  ignoreCase: boolean;
}
function _fuzzySearch(
  _query: string,
  _word: string,
  options: fuzzysearchOptions = { ignoreCase: true }
) {
  const [query, word] = options.ignoreCase
    ? [_query, _word].map((e) => e.toLowerCase())
    : [_query, _word];
  const hlen = word.length;
  const nlen = query.length;
  if (nlen > hlen) {
    return false;
  }
  if (nlen === hlen) {
    return query === word;
  }
  outer: for (let i = 0, j = 0; i < nlen; i++) {
    const nch = query.charCodeAt(i);
    while (j < hlen) {
      if (word.charCodeAt(j++) === nch) {
        continue outer;
      }
    }
    return false;
  }
  return true;
}
export function fuzzySearch(
  word: string | string[],
  query: string,
  options?: fuzzysearchOptions
) {
  return Array.isArray(word)
    ? word.some((e) => _fuzzySearch(query, e, options))
    : _fuzzySearch(query, word, options);
}

