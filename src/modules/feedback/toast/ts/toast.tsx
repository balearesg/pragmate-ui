import { Icon } from 'pragmate-ui/icons';
import React from 'react';
import type { IProps } from './definitions';
import { useToastAnimation } from './use-toast';

const DEFAULT_DURATION = 3000;

export /*bundle*/ function Toast({ type, message, duration, id }: IProps): JSX.Element {
	const toastRef = React.useRef<HTMLDivElement>(null);
    duration = duration ?? DEFAULT_DURATION;
    useToastAnimation(toastRef, duration, id);

    const icons = {
        error: 'triangle-exclamation',
        success: 'tickCircle',
        info: 'infoCircle',
        loading: 'refreshCircle',
        warning: 'warning',
    };

    return (
        <article ref={toastRef} className={`toast ${type}`}>
            <Icon icon={icons[type]} className='icon' />
            <p className='message'>{message}</p>
        </article>
    );
}
