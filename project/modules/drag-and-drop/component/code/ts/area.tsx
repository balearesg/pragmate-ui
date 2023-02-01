import React, { ChangeEvent } from "react";
import { BeyondImage } from "@bgroup/ui/image";
import { useDragAndDropContext } from "./context";

export function Area(): JSX.Element {
  const { files, count, formats, showMessage, state, dispatch } =
    useDragAndDropContext();
  const accept: string[] =
    formats && Array.isArray(formats) && formats.map((item) => `.${item}`);
  const cls: string =
    count && files.length < count
      ? "hover FilesDragAndDrop__area"
      : "FilesDragAndDrop__area";
  const attrs: { [key: string]: string | boolean } = {};
  if (formats) attrs.accept = accept.join(", ");
  if (count && count > 1) attrs.multiple = true;
  const onFileDrop = (event: ChangeEvent<HTMLInputElement>): void => {
    const newFile : File[] = [...event.target.files];
    if (count && count < newFile.length) {
      showMessage(`Solo puese cargar ${count} archivo${count !== 1 ? 's' : ''} a la ves`, 'error', 2000);
      return;
  };
    if (newFile) {
      dispatch({ case: "files", files: state.files.concat(newFile) });
      showMessage(
        `Archivo${newFile.length > 1 ? "s" : ""} cargado${
          newFile.length > 1 ? "s" : ""
        } para importar`,
        "success",
        2000
      );
    }
  };
  return (
    <div className={cls}>
      <BeyondImage
        src={`${globalThis.baseDir}assets/cloud-upload-regular-240.png`}
        alt=""
      />
      {count && files.length < count && (
        <input {...attrs} type="file" onChange={onFileDrop} />
      )}
      <span>Arrastra y suelta tu archivo</span>
    </div>
  );
}
