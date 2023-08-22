export const implementation = `
export function DragAndDropImplementation() {
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
}`;

export const implementationPhoto = `
export function DragAndDropImplementationPhoto() {
	function onUpload(files: File[]): void {
		//your logic
	};

	return (
		<div className="results-form">
			<DragAndDrop
				onUpload={onUpload}
				userPhoto
			/>
		</div>
	);
}`;
