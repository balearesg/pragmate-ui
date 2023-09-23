import { createContext, useContext, Context } from "react";
import { CValue } from "./types";

export const DragAndDropContext: Context<CValue> = createContext({ files: [] });
export const useDragAndDropContext: () => CValue = (): CValue =>
  useContext(DragAndDropContext);
