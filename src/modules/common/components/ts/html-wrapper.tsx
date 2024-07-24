import React from 'react';

type HtmlRenderProps = {
	children: string;
	/**
	 * @deprecated
	 */
	tag?: keyof JSX.IntrinsicElements;
	as?: keyof JSX.IntrinsicElements;
	params: Record<string, string>;
};
export /*bundle*/ function HtmlWrapper({
	className,
	children,
	params = {},
	tag = 'span',
	as = 'span',
}: HtmlRenderProps) {
	const Control = as || tag;
	const keys = Object.keys(params);
	keys.forEach(key => {
		const value = params[key];
		children = children.replace(`{${key}}`, value);
	});
	return <Control className={className} dangerouslySetInnerHTML={{ __html: children }} />;
}
