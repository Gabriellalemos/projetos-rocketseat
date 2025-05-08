export const increment = (count: number, setCount: (count: number) => void) => {
  setCount(count + 1);
};

export const decrement = (count: number, setCount: (count: number) => void) => {
  if (count > 0) {
    setCount(count - 1);
  }
};
