import React from 'react';
import { Icon, IconButton } from 'pragmate-ui/icons';
import { Content } from './content';

type IProps = {
	show?: boolean;
	className?: string;
	type?: string;
	message?: string;
	title?: string;
	closable?: boolean;
	onClose: () => boolean;
	children?: React.ReactNode;
	icon: boolean | string;
};

type iconMap = {
	[key: string]: string;
};

export /*bundle*/
function Alert(props: IProps) {
	const { message, className, type, title, children, closable, onClose, icon } = props;
	const [show, setShow] = React.useState(true);

	if (!show) {
		return null;
	}

	const onCloseClick = async () => {
		if (onClose) await onClose();
		setShow(false);
	};

	let cls = `${className ? '${className} ' : ''}alert${type ? ` alert--${type}` : ''}`;
	cls = icon ? `${cls} alert--icon` : cls;

	const icons: iconMap = {
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
