import React, { MouseEvent } from "react";
import { useDragAndDropContext } from "./context";
import { ImageConfig } from "./image-config";

export function Preview(): JSX.Element {
  const { files, dispatch } = useDragAndDropContext();

  const deleteFile = (event: MouseEvent<HTMLSpanElement>): void => {
    const { dataset } = event.currentTarget;
    const fileFilter: File[] = files.filter(
      (file: File): boolean => file.name !== dataset.name
    );
    dispatch({ case: "files", files: [...fileFilter] });
  };
  const preview: JSX.Element[] = files.map(
    (item: File, index: number): JSX.Element => (
      <div key={index} className="drop-file-preview__item">
        <img src={ImageConfig["default"]} alt="" />
        <div className="drop-file-preview__item__info">
          <p>{item.name}</p>
          <p>{item.size}B</p>
        </div>
        <span
          data-name={item.name}
          onClick={deleteFile}
          className="drop-file-preview__item__del"
        >
          x
        </span>
      </div>
    )
  );
  return (
    <>
      {" "}
      {!!files.length && (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">Listo para Importar</p>
          {preview}
        </div>
      )}
    </>
  );
}
