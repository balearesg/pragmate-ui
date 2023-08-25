import * as React from 'react';
import Docs from './es/index.mdx';
import MaterialDesign from './es/material-design.mdx';
export /*bundle*/
function View() {
	return (
		<div className='page__container'>
			<h2>Color system</h2>
			<Docs />
			<h2>Material Design</h2>
			<MaterialDesign />
		</div>
	);
}
