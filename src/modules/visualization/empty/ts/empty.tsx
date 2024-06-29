import React from 'react';
import { Icon } from 'pragmate-ui/icons';
import { IPUIProps } from 'pragmate-ui/base';

interface IPropsEmpty extends Omit<IPUIProps<IPropsEmpty>, 'variant'> {
	text?: string;
	icon?: string;
	additionalElement?: React.ReactNode;
}
export /*bundle*/
function Empty(props: IPropsEmpty): JSX.Element {
	const cls = `${props.className ?? ''} pui-empty-section`;

	return (
		<div className={cls}>
			<div className="content">
				{props.icon && <Icon className="pui-empty__icon" icon={props.icon} />}
				{props.text && <h3>{props.text}</h3>}
				{props.children && props.children}
			</div>
		</div>
	);
}
