import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./types";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector as unknown as <T>(
  selector: (state: RootState) => T
) => T;