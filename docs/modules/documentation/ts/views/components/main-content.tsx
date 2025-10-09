import * as React from 'react';

interface IMainContentProps {
	children: React.ReactNode;
}

export function MainContent({ children }: IMainContentProps): JSX.Element {
	return (
		<main className="main-content">
			<div className="main-content__container">
				<div className="main-content__header">
					<h1 className="main-content__title">Documentation</h1>
					<p className="main-content__description">
						Complete guide to using Pragmate UI components and patterns
					</p>
				</div>

				<div className="main-content__body">{children}</div>
			</div>
		</main>
	);
}
