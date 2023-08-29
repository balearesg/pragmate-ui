import React from 'react';
import { Icon, IconButton } from 'pragmate-ui/icons';
import { Content } from './content';
import { IProps, IiconMap } from './types';

export /*bundle*/
function Alert(props: IProps) {
	const { message, className, type, title, children, closable, onClose, icon } = props;
	const [show, setShow] = React.useState(true);

	if (!show || (!message && !children)) {
		return null;
	}

	const onCloseClick = async () => {
		if (onClose) await onClose();
		setShow(false);
	};

	let cls = `${className ? `${className} ` : ''} alert${type ? ` alert--${type}` : ''}`;
	cls = icon ? `${cls} alert--icon` : cls;

	const icons: IiconMap = {
		error: 'error',
		warning: 'circle-exclamation',
		success: 'circle-check',
		info: 'info',
	};

	const defaultIcon = icons[type ?? 'success'];
	const hasIcon = !!defaultIcon;
	return (
		<div className={cls} onClick={close}>
			{icon && (
				<section>
					<Icon icon={defaultIcon} />
				</section>
			)}

			<Content message={message} type={type} title={title} icon={hasIcon}>
				{children}
			</Content>
			{closable && <IconButton icon='close' onClick={onCloseClick} />}
		</div>
	);
}
