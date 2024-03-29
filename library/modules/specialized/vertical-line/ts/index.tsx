import React from 'react';
import type {IEvent} from './type';
import {Icon} from 'pragmate-ui/icons';
export /* bundle */ function VerticalLine({events, variant = 'primary'}): JSX.Element {
	let cls = variant ? `timeline-event__content--icon ${variant}` : 'timeline-event__content--icon';

	const output = events.map((event, index) => (
		<div key={index} className="timeline-event">
			<div className={cls}>
				<Icon icon={event.icon} />
			</div>
			<div className="timeline-event__content--block">
				<header className="item-header">
					<h3 className="item-header__h3">{event.title}</h3>
					<span className="item-header__span">{event.date}</span>
				</header>
				<p className="block-description">{event.description}</p>
			</div>
		</div>
	));
	return (
		<div className="pui__vertical-line">
			<div className="line"></div>
			<div className="container-timeline">{output}</div>
		</div>
	);
}
