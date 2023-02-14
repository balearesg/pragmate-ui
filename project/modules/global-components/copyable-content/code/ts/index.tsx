import * as React from 'react';
import { toast } from '@bgroup/ui/toast';
import { BeyondIconButton } from '@bgroup/ui/icons';
import Highlight, { defaultProps } from 'prism-react-renderer';

export /*bundle*/ function CopyableImplementation({ children }) {
	
	function copy() {
		navigator.clipboard.writeText(children);
		toast.success('Copied implementation');
	}

	return (
		<div className="copyable-content">
			<div className="code">
				<Highlight {...defaultProps} code={children} language="jsx">
					{({ className, style, tokens, getLineProps, getTokenProps }) => (
						<code className={className} style={style}>
							{tokens.map((line, i) => (
								<div {...getLineProps({ line, key: i })}>
									{line.map((token, key) => (
										<span {...getTokenProps({ token, key })} />
									))}
								</div>
							))}
						</code>
					)}
				</Highlight>
			</div>
			<BeyondIconButton icon="copy" onClick={copy} className="copy-button"/>
		</div>
	);
}
