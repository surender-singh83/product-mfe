export const debounce = <T extends unknown[]>(
  fn: (...args: T) => void,
  delay: number = 300,
) => {
  let timer: ReturnType<typeof setTimeout>;

  return function (...args: T) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
