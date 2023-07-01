import { useState, Dispatch, SetStateAction } from "react";

type UseCustomStateResult<T> = [T, Dispatch<SetStateAction<T>>];

const useCustomState = <T,>(initialValue: T): UseCustomStateResult<T> => {
  const [state, setState] = useState<T>(initialValue);

  const customSetState: Dispatch<SetStateAction<T>> = (newValue) => {
    setState(newValue);
  };

  return [state, customSetState];
};

export default useCustomState;
