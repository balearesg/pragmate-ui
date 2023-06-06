import * as React from "react";
import { DragAndDrop } from "pragmate-ui/drag-and-drop";

export function ResultsUserPhoto() {
  function onUpload(files: File[]): void {
    //your logic
  }

  return (
    <div className="results-form">
      <DragAndDrop onUpload={onUpload} userPhoto />
    </div>
  );
}
