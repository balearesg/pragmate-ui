import { IPUIProps } from 'pragmate-ui/base';

//TODO: check if in the future the ContextMenu component it need prop variant
export interface IContextMenuProps extends Omit<IPUIProps<IContextMenuProps>, 'variant'> {
	unmount?: (value: boolean) => void;
}

export interface IContextMenu {
	opened?: boolean;
	position?: {
		x: number;
		y: number;
	};
	closeContextMenu: () => void;
}