import React from 'react';
import { RippleEffect } from 'pragmate-ui/ripple';
import tippy from 'tippy.js';
import { Icon } from 'pragmate-ui/icons';
import { IChipProps } from './definitions';

type ChipProps = IChipProps & React.HTMLAttributes<HTMLSpanElement>;

export /*bundle*/ function Chip(props: ChipProps) {
    const { type, title, children, icon } = props;
    const properties = { ...props };
    const ref = React.useRef<HTMLSpanElement>(null);

    ['children', 'type', 'className', 'variant'].forEach(key => delete properties[key]);

    React.useEffect(() => {
        if (properties.onClick) {
            const ripple = new RippleEffect();
            ripple.addRippleEffect(ref.current);
        }
        if (title) tippy(ref.current);
    }, [properties.onClick, title]);

    if (title) properties['data-tippy-content'] = title;
    const variant = props.variant || props.type || 'default';
    let cls = `pui-chip pui-chip--${variant}`;

    if (properties.onClick) {
        cls += ` is-clickable`;
    }

    return (
        <span ref={ref} className={cls} {...properties}>
            {children}
            {icon && <Icon icon={icon} />}
        </span>
    );
}
