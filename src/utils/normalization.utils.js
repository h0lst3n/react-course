export const getTags = (data) => {
  const tags = data.map(item => item['_tags']);
  return tags.flat().reduce((result, tag) => {
    if (result.indexOf(tag) < 0) {
      result.push(tag);
    }
    return result;
  }, []);
};

const memoize = fn => {
  const cache = {};

  return (...args) => {
    const strignifyArgs = JSON.stringify(args);

    if (cache[strignifyArgs]) {
      return cache[strignifyArgs];
    }

    cache[strignifyArgs] = fn(...args);

    return cache[strignifyArgs];
  }
};
