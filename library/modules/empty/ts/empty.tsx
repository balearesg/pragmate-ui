import React from 'react';
import { Icon } from 'pragmate-ui/icons';
interface IProps {
	text?: string;
	icon?: string;
	classNameIcon?: string;
	children?: React.ReactNode;
	className?: string;
}

export /*bundle*/
function Empty(props: IProps): JSX.Element {
	const cls = `pui-empty-section${props.className ? ` ${props.className}` : ''}`;

	return (
		<div className={cls}>
			<div className='content'>
				{props.icon && <Icon icon={props.icon} className={props.classNameIcon} />}
				{props.text && <h3>{props.text}</h3>}
				{props.children && props.children}
			</div>
		</div>
	);
}
