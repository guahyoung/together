const useThrottle = (func: () => void, delay = 600) => {
  let timer: NodeJS.Timeout | null;
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
