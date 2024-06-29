export interface IAccordionItem {
    disabled?: boolean, 
    children?: any, 
    title?: string, 
    index?: any
}

export interface IAccordionContext {
	onChange?: (event: any) => void;
	opened?: number;
	setOpened?: (opened: number) => void;
}

export interface ICollapsibleHeader {
	children: React.ReactNode;
	className?: string;
	toggleTitle?: boolean;
}

export interface IContainerProps {
	children: React.ReactNode;
	className?: string;
	open?: boolean;
	onToggle?: (open: boolean) => void;
}