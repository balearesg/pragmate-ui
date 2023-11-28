import React from 'react';
import { useInputContext } from './context';
import { Spinner } from 'pragmate-ui/spinner';
import { Label } from './label';
import { IconToDisplay } from './icon';

export function RenderingProps() {
	const { props } = useInputContext();

	const displayRequired = !props.label && props.required;
	const toDisplayError: string = props.error;

	return (
		<>
			<Label />
			{props.loading && <Spinner color="var(--text-color)" type="primary" active />}
			<IconToDisplay />
			{displayRequired && <span className="pui-input__required-label">(*)</span>}
			<span className="pui-element-input-label">{toDisplayError}</span>
		</>
	);
}
