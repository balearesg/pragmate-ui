import * as React from 'react';
import { BeyondIcon } from '@bgroup/ui/icons';
type props = {
	text?: string;
	icon?: string;
	additionalElement?: React.ReactNode;
	children?: React.ReactNode;
	className?: string;
};
export /*bundle*/
function BeyondEmpty(props: props): JSX.Element {
	const text: string = props.text ? props.text : 'No hay registros';
	const cls = `${props.className ?? ''} beyond-element-empty`;
	return (
		<div className={cls}>
			<div className="content">
				{props.icon && <BeyondIcon icon={props.icon} />}
				<h3>{text}</h3>
				{props.additionalElement ? props.additionalElement : null}
				{props.children ? props.children : null}
			</div>
		</div>
	);
}
