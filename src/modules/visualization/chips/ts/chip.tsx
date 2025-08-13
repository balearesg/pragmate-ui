import React from 'react';
import { RippleEffect } from 'pragmate-ui/ripple';
import { Icon } from 'pragmate-ui/icons';
import { IChipProps } from './types';

type ChipProps = IChipProps & React.HTMLAttributes<HTMLSpanElement>;

export /*bundle*/ function Chip(props: ChipProps) {
    const { type, title, children, icon } = props;
    const properties = { ...props };
    const ref = React.useRef<HTMLSpanElement>(null);
    const [showTooltip, setShowTooltip] = React.useState(false);

    ['children', 'type', 'className', 'variant'].forEach(key => delete properties[key]);

    React.useEffect(() => {
        if (properties.onClick) {
            const ripple = new RippleEffect();
            ripple.addRippleEffect(ref.current);
        }
    }, [properties.onClick]);

    const handleMouseEnter = () => {
        if (title) setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        if (title) setShowTooltip(false);
    };

    const variant = props.variant || props.type || 'default';
    let cls = `pui-chip pui-chip--${variant}`;

    if (properties.onClick) {
        cls += ` is-clickable`;
    }

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <span 
                ref={ref} 
                className={cls} 
                {...properties}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
                {icon && <Icon icon={icon} />}
            </span>
            {showTooltip && title && (
                <div 
                    className="floating-ui-tooltip"
                    style={{
                        position: 'absolute',
                        top: '-40px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 9999
                    }}
                >
                    {title}
                </div>
            )}
        </div>
    );
}
