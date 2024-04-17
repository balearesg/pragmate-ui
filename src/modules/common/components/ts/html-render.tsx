import React from 'react';

type HtmlRenderProps = {
	children: string;
	/**
	 * @deprecated
	 */
	tag?: keyof JSX.IntrinsicElements;
	as?: keyof JSX.IntrinsicElements;
};
export /*bundle*/ function HtmlWrapper({ children, tag = 'span', as = 'span' }: HtmlRenderProps) {
	const Control = as || tag;
	return <Control dangerouslySetInnerHTML={{ __html: children }} />;
}
