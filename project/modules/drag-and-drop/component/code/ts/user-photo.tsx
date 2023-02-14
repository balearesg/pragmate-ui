import React, { ChangeEvent } from "react";
import { useDragAndDropContext } from "./context";
import { BeyondIcon } from "@bgroup/ui/icons";
import { BeyondImage } from '@bgroup/ui/image';
export function UserPhoto(): JSX.Element {
  const { drop, textUserPhoto, state, dispatch } = useDragAndDropContext();

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) : void => {
    const [file] : FileList = event.target.files;
    if (!file) return
    const img : string = URL.createObjectURL(file)
    dispatch({ case: "img", img })
  };
  const cls: string = state.img ? "drag-and-drop-container-user" : "drag-and-drop-container-user border"
  return (
    <div className={cls}>
      <div ref={drop} data-type="photo" className="file-drag-and-drop-user">
        <BeyondIcon icon="camera" />
        <span>{textUserPhoto}</span>
        <input
          placeholder="Select image"
          accept="image/*"
          multiple={false}
          type="file"
          onChange={onImageChange}
        />
      </div>
      {state.img && <BeyondImage alt="photo user" src={state.img} />}
    </div>
  );
}
