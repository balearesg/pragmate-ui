import React from 'react';
import {ScrollContainer} from 'pragmate-ui/perfect-scrollbar';

export function Results() {
	const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quis veniam.';
	const output = [];
	for (var i = 0; i < 300; i++) {
		output.push(text);
	}
	return (
		<ScrollContainer data-suppress-scroll-x="true">
			<div>{output.join('')}</div>
			<div className="ps__rail-x">
				<div className="ps__thumb-x" tabIndex={0} />
			</div>
			<div className="ps__rail-y">
				<div className=" ps__thumb-y" tabIndex={0} />
			</div>
		</ScrollContainer>
	);
}
