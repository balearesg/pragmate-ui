import React from 'react';

type HtmlRenderProps = {
	children: string;
	tag?: keyof JSX.IntrinsicElements;
};
export /*bundle*/ function HtmlWrapper({ children, tag = 'span' }: HtmlRenderProps) {
	const Control = tag;
	return <Control dangerouslySetInnerHTML={{ __html: children }} />;
}
