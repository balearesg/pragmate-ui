import React from 'react';
import ENContent from './docs/en.mdx';
import ESContent from './docs/es.mdx';
import {Code} from 'pragmate-ui/code';
import {languages} from '@beyond-js/kernel/core';
import {example} from './example';
export /*bundle*/
function View() {
	const Content = {en: ENContent, es: ESContent}[languages.current];

	return (
		<div className="view">
			<Content />
		</div>
	);
}
