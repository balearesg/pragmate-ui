export interface ContextMenuProps {
	className?: string;
	unmount: (value: boolean) => void;
	children: React.ReactNode;
}

export interface IContextMenu {
	opened?: boolean;
	position?: {
		x: number;
		y: number;
	};
	closeContextMenu: () => void;
}