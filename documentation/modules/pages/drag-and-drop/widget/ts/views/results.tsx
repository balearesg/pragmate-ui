import * as React from 'react';
import { DragAndDrop } from '@bgroup/ui/drag-and-drop';

export function Results() {

	function onUpload(files: File[]): void {
		//your logic
	};
	const formats = ['pdf']
	return (
		<div className="results-form">
			<DragAndDrop
				onUpload={onUpload}
				count={2}
				formats={formats}
			/>
		</div>
	);
}
