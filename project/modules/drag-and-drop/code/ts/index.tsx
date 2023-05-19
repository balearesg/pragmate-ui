import React, { useRef, useEffect, MutableRefObject, PropsWithChildren, useReducer } from 'react';
import { DragAndDropContext } from './context';
import { initialState, reducer } from './reducer';
import { CValue, propsIndex } from './types';
import { View } from './view';

export /*bundle*/ const DragAndDrop = (props: PropsWithChildren<propsIndex>): JSX.Element => {

    const drop: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    const [state, dispatch] = useReducer(reducer, initialState);

    const { onUpload, count, formats, children, clean, userPhoto, textUserPhoto } = props;

    const drag: MutableRefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    const showMessage = (text: string, type: string, timeout: number): void => {
        dispatch({
            case: "message", show: true,
            text,
            type,
        })
        setTimeout(() => dispatch({ case: "hideMessage" }), timeout);
    };

    const handleDragEnter = (event: DragEvent): void => {
        event.preventDefault();
        event.stopPropagation();
        if (event.target !== drag.current) dispatch({ case: "dragging", dragging: true });
    };

    const handleDragLeave = (event: DragEvent): void => {
        event.preventDefault();
        event.stopPropagation();
        if (event.target === drag.current) dispatch({ case: "dragging", dragging: false });
    };

    const handleDragOver = (event: DragEvent): void => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDrop = (event: DragEvent): void => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({ case: "dragging", dragging: false });
        const newFiles: File[] = [...event.dataTransfer.files];
        const { dataset: { type } }: Partial<HTMLDivElement> = event.currentTarget;
        if (type === "photo" && newFiles.length > 1) {
            return
        };
        if (count && count < newFiles.length) {
            showMessage(`Solo puese cargar ${count} archivo${count !== 1 ? 's' : ''} a la ves`, 'error', 2000);
            return;
        };
        if (
            formats &&
            newFiles.some(
                (file: File): boolean =>
                    !formats.some((format: string): boolean =>
                        file.name.toLowerCase().endsWith(format.toLowerCase())
                    )
            )
        ) {
            const filesFormats: string[] = newFiles.map((item: File): string => item.type.split("/")[1]);
            showMessage(
                `Los siguientes formatos no están disponibles: ${filesFormats.join(
                    ", "
                )}`,
                "error",
                2000
            );
            return;
        };
        if (newFiles && newFiles.length && type !== "photo") {
            showMessage(
                `Archivo${newFiles.length > 1 ? "s" : ""} cargado${newFiles.length > 1 ? "s" : ""
                } para importar`,
                "success",
                2000
            );
            dispatch({ case: "files", files: state.files.concat(newFiles) });
            onUpload(newFiles)
        };
        if (type === "photo") {
            const img = URL.createObjectURL(newFiles[0]);
            dispatch({ case: "img", img })
            onUpload(newFiles)
        };
    };

    useEffect((): () => void => {
        if (count && state.files.length >= count || !drop.current) return
        drop.current.addEventListener('dragover', handleDragOver);
        drop.current.addEventListener('drop', handleDrop);
        drop.current.addEventListener('dragenter', handleDragEnter);
        drop.current.addEventListener('dragleave', handleDragLeave);

        return (): void => {
            if (!drop.current) return;
            drop.current.removeEventListener('dragover', handleDragOver);
            drop.current.removeEventListener('drop', handleDrop);
            drop.current.removeEventListener('dragenter', handleDragEnter);
            drop.current.removeEventListener('dragleave', handleDragLeave);
        };
    }, [state.files]);

    const value: CValue = {
        files: state.files,
        message: state.message,
        count,
        formats,
        showMessage,
        dispatch,
        onUpload,
        state,
        clean,
        drop,
        drag,
        userPhoto,
        textUserPhoto
    };
    return (
        <DragAndDropContext.Provider value={value}>
            <View children={children} />
        </DragAndDropContext.Provider>
    );
}

DragAndDrop.defaultProps = {
    clean: false,
    textUserPhoto: "Haga clic o arraste su imagen para cambiar foto"
}