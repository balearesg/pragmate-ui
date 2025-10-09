import React from 'react';

export interface IProps {
	children: React.ReactNode;
	className?: string;
}
export /*bundle*/ function CodeExample({ children, className }: IProps) {
	return <div className='code-example'>{children}</div>;
}

export /*bundle*/ function UIExample({ children, className }: IProps) {
	return <div className='ui-example'>{children}</div>;
}
