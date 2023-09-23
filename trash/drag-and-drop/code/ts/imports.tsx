import React, { ReactNode } from 'react';
import { Area } from './area';
import { useDragAndDropContext } from './context';
import { Message } from './message';
import { Preview } from './preview';
import { Button, Form } from 'pragmate-ui/form';
import { Alert } from 'pragmate-ui/alert';

export function Imports({ children }: { children: ReactNode }): JSX.Element {
	const { state, count, drop, drag, formats, dispatch, onUpload, clean } = useDragAndDropContext();
	const handleSubmit = async (): Promise<void> => {
		dispatch({ case: 'dragging', dragging: true });
		await onUpload(state.files);
		dispatch({ case: 'dragging', dragging: false });
		if (clean) dispatch({ case: 'files', files: [] });
	};
	const textFormats: string =
		formats &&
		Array.isArray(formats) &&
		`Formato${formats.length > 1 ? '' : ''} disponibles: ${formats.join(', ')}`;
	const textAlertInfo: string = `${
		count && count !== Infinity ? `Puede cargar un máximo de ${count} archivo${count !== 1 ? 's' : ''}` : ''
	} ${textFormats}`;
	const disabled: { disabled?: boolean } = {};
	if (state.dragging || !state.files.length) disabled.disabled = true;

	return (
		<Form className="drag-and-drop-container" onSubmit={handleSubmit}>
			<header className="content-header">
				<h3 className="content-header__h3">Importar archivos</h3>
			</header>
			{/* <div className="info-drag" dangerouslySetInnerHTML={{ __html: textAlertInfo }} /> */}
			<Alert type="info">
				<p className="alert__title-span">{textAlertInfo}</p>
			</Alert>
			<div ref={drop} data-type="import" className="FilesDragAndDrop">
				<Message />
				{state.dragging && (
					<div ref={drag} className="FilesDragAndDrop__placeholder">
						{' '}
					</div>
				)}
				<Area />
			</div>
			<Preview />
			<div className="drop-file-button">
				<Button variant="primary" type="submit" {...disabled} label="Import" />
			</div>
			{children}
		</Form>
	);
}
