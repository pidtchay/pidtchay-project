/**
 * Pattern that we can limit the times it fires an event.
 * No matter how many times the user can trigger this, it executes only once in specific time interval.
 * @param [Function] func - function
 * @param [number] limit - time interval
 */
export const throttle = (func, limit: number) => {
  let timeout = null;
  if (!timeout) {
    timeout = setTimeout(() => {
      func();
      timeout = null;
    }, limit);
  }
};

export const debounce = (func, limit: number) => {
  let timeout = null;
  clearTimeout(timeout);
  timeout = setTimeout(func, limit);
};

/**
 * Deep value search by key in the transferred object.
 * Usage example: get(literals, 'SideMenu.home')
 * @param [T] obj - transferred object
 * @param [string] path - key path
 */
export const get = <T extends {}>(obj: T, path: string): [] => {
  const idx = (p, o) => p.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), o);
  const paths = path.split('.');
  return idx(paths, obj);
};
