import React from 'react';
import {Tabs, Tab, TabsContainer, Panes} from 'pragmate-ui/tabs';
import {toast} from 'pragmate-ui/toast';

export function Example() {
	const onChange = (event, index) => {
		toast.info(`Tab ${index + 1} selected`);
	};

	return (
		<TabsContainer onChange={onChange} active={true}>
			<Tabs>
				<Tab>Tab 1</Tab>
				<Tab>Tab 2</Tab>
				<Tab>Tab 3</Tab>
			</Tabs>
			<Panes>
				<div>Content 1</div>
				<div>Content 2</div>
				<div>Content 3</div>
			</Panes>
		</TabsContainer>
	);
}
