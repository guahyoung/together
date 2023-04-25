const useThrottle = (func, delay = 600) => {
  let timer;
  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        func();
      }, delay);
    }
  };
};

export default useThrottle;
