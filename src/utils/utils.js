export const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    const stringifiedAtgs = JSON.stringify(args);

    if (cache[stringifiedAtgs]) {
      return cache[stringifiedAtgs];
    }

    cache[stringifiedAtgs] = fn(...args);

    return cache[stringifiedAtgs];
  }
}
