import React from 'react';
import {useCollapsibleContext} from './context';
import { IPUIProps } from 'pragmate-ui/base';

export /*bundle */ function CollapsibleContent({className, children}: IPUIProps) {
	const {open} = useCollapsibleContext();
	const cls = `collapsible__content${className ? ` ${className}` : ''} ${
		open ? ' collapsible__content--opened' : ''
	}`;
	return <section className={cls}>{children}</section>;
}
