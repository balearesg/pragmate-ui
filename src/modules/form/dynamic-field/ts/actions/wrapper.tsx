import React, { ReactElement, ReactNode } from 'react';

interface ActionWrapperProps {
	children: ReactElement;
	onClick: () => void;
}

export const ActionWrapper = ({ children, onClick }: ActionWrapperProps) => {
	if (!React.isValidElement(children)) {
		console.error('ActionWrapper: The child must be a valid React element.');
		return null;
	}

	return React.cloneElement(children as React.ReactElement<any>, { onClick });
};
