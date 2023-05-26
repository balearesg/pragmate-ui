import * as React from 'react';
import * as Prism from 'prismjs';
import { Clipboard } from './clipboard';

export /*bundle*/ function Code({ language = 'typescript', children, clipboard = true }) {
	const createMarkup = () => {
		if (!children) {
			return { __html: '' };
		}
		const html = Prism.highlight(children, Prism.languages.javascript, language);
		return { __html: html };
	};
	const cls = `code-container${clipboard ? ' has-clipboard' : ''}`;
	return (
		<div className={cls}>
			<pre>
				<code className={`regular__code language-${language}`} dangerouslySetInnerHTML={createMarkup()} />
			</pre>
			{clipboard && <Clipboard text={children} message="" />}
		</div>
	);
}
