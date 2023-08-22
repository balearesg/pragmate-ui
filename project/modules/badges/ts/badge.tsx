import * as React from 'react';
import { RippleEffect } from 'pragmate-ui/ripple';
import tippy from 'tippy.js';

export /*bundle*/ function Badge(props) {
	const { item, type, children, className, title } = props;
	const properties = { ...props };
	const ref = React.useRef<HTMLSpanElement>(null);

	['children', 'type', 'className'].forEach(key => delete properties[key]);

	React.useEffect(() => {
		if (properties.onClick) {
			const ripple = new RippleEffect();
			ripple.add(ref.current);
		}
		if (title) tippy(ref.current);
	}, [properties.onClick, title]);

	if (title) properties['data-tippy-content'] = title;

	let cls = `pui-badge${type ? ` pui-badge--${type}` : ''}${className ? ` ${className}` : ''}`;

	if (properties.onClick) {
		cls += ` is-clickable`;
	}

	return (
		<span ref={ref} className={cls} {...properties}>
			{item}
			{children}
		</span>
	);
}
