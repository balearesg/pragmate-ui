import React, { ReactNode } from "react";
import { Area } from "./area";
import { useDragAndDropContext } from "./context";
import { Message } from "./message";
import { Preview } from "./preview";

export function Imports({ children }: { children: ReactNode }): JSX.Element {
  const { state, count, drop, drag, formats } = useDragAndDropContext();
  const textFormats: string =
    formats &&
    Array.isArray(formats) &&
    `Formato${formats.length > 1 ? "s" : ""} disponibles: ${formats.join(
      ", "
    )}`;
  const textAlertInfo: string = `${count &&
    `Puede cargar un máximo de ${count} archivo${count !== 1 ? "s" : ""}`
    } <br /> ${textFormats}`;
  const disabled: { disabled?: boolean } = {};
  if (state.dragging || !state.files.length) disabled.disabled = true;

  return (
    <div className="drag-and-drop-container">
      {count !== Infinity && (
        <div
          className="info-drag"
          dangerouslySetInnerHTML={{ __html: textAlertInfo }}
        />
      )}
      <div ref={drop} data-type="import" className="FilesDragAndDrop">
        <Message />
        {state.dragging && (
          <div ref={drag} className="FilesDragAndDrop__placeholder">
            {" "}
          </div>
        )}
        <Area />
      </div>
      <Preview />
      {children}
    </div>
  );
}
