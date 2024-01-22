import React from 'react';
import Content from './content.mdx';
import Errors from './docs/errors.mdx';
import { Code } from 'pragmate-ui/code';
import { UIExample } from 'pragmate-ui-docs/utils';

import { DefaultExamples } from './examples/default';
import { ErrorExamples } from './examples/errors';
import { LabelExamples } from './examples/labels';
// import { UIExample } from 'pragmate-ui-docs/utils

export /*bundle*/
function View() {
	return (
		<div className='view'>
			<Content />
		</div>
	);
}
