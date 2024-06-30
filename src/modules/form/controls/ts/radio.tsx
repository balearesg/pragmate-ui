import { IPUIProps } from 'pragmate-ui/base';
import React, { MutableRefObject, useRef, InputHTMLAttributes } from 'react';

interface IPropsRadio extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

type CombinedProps = IPropsRadio & IPUIProps<HTMLInputElement>;

export /*bundle*/ function Radio(props: CombinedProps): JSX.Element {
    const input: MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    const onClick = (event): void => {
        event.stopPropagation();
        input.current.checked = true;
        if (!!props.onChange) props.onChange(event);
    };

    const properties: CombinedProps = { ...props };
    delete properties.onChange;

    const cls: string = `pragmate-element-radio ${properties.className ? properties.className : ''}`;

    return (
        <label className={cls} onClick={onClick}>
            <input ref={input} {...properties} type='radio' onChange={onClick} />
            {properties.label && <span>{properties.label}</span>}
        </label>
    );
}
