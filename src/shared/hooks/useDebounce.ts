import { useEffect, useState } from "react";

export function useDebounce(inputValue: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [inputValue, delay]);
  return debouncedValue;
}
