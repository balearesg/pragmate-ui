import React, { ReactNode } from "react";
import { useDragAndDropContext } from "./context";
import { Imports } from "./imports";
import { UserPhoto } from "./user-photo";

export function View({ children }: { children: ReactNode }): JSX.Element {
  const { userPhoto } = useDragAndDropContext();
  const Control = userPhoto ? UserPhoto : Imports
  return <Control children={children} />;
};
