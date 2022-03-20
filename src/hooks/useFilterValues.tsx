import { useState, useEffect } from "react";

export const useFilterValues = (input: string = "", time: number = 300) => {
  const [filterValues, setFilterValues] = useState(input);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilterValues(input);
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return filterValues;
};
