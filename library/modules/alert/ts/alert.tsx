import React, { MouseEvent } from 'react';
import { Icon, IconButton } from 'pragmate-ui/icons';
import { Content } from './content';
import { IProps, IIconMap } from './types';

export /*bundle*/
	function Alert({ message, className, type, title, children, closable, onClose, icon }: IProps) {

	const [show, setShow] = React.useState(true);

	if (!show || (!message && !children)) return null;

	const onCloseClick = async (event: MouseEvent) => {
		event.stopPropagation();
		if (onClose) await onClose();
		setShow(false);
	};

	let cls = `${className ? `${className} ` : ''} alert${type ? ` alert--${type}` : ''}`;
	cls = icon ? `${cls} alert--icon` : cls;

	const icons: IIconMap = {
		error: 'error',
		warning: 'circle-exclamation',
		success: 'circle-check',
		info: 'info',
	};

	const defaultIcon = icons[type ?? 'success'];
	const hasIcon = !!icon;
	return (
		<div className={cls} onClick={onCloseClick}>
			{icon && (
				<section>
					<Icon icon={defaultIcon} />
				</section>
			)}

			<Content message={message} title={title} icon={hasIcon}>
				{children}
			</Content>
			{closable && <IconButton icon="close" onClick={onCloseClick} />}
		</div>
	);
}
