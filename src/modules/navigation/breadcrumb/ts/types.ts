import React from 'react';

type ClickHandler = (event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => void;

export interface IProps extends React.AllHTMLAttributes<HTMLDivElement> {
	items: [string, (string | ClickHandler)?, ClickHandler?][];
	border?: string;
	separator?: string;
}

export interface IItem {
	link?: string | ClickHandler;
	label?: string | number;
	currentRouting?: string;
	onClick?: ClickHandler;
	separator?: string;
	total?: number;
	index?: number;
}
