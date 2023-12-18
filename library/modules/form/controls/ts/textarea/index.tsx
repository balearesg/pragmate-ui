import React from 'react';
import { ChangeEvent, useRef, useState } from 'react';
import { IProps, ISate, TValue } from './types';


export /*bundle*/ function Textarea(props: IProps): JSX.Element {
    const input = props.ref ?? useRef();

    const [state, setState] = useState<ISate>({
        value: props.value ?? '',
        errorMessage: props.errorMessage ? props.errorMessage : 'Formato incorrecto',
        lengthMessage: 'Cantidad máxima: ',
        emptyMessage: 'Este campo es requerido',
    });

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        if (!!props.onChange && typeof props.onChange === 'function') props.onChange(event);
        setState({
            ...state,
            _hasError: false,
            value: event.target.value,
        });
    };

    const getError: Function = (hasError: boolean): JSX.IntrinsicElements['span'] => {
        if (!state._hasError && !hasError) return;

        let errorMessage: string = state.emptyMessage;

        if (hasError || input.value !== '') errorMessage = props.errorMessage ? props.errorMessage : state.errorMessage;

        if (props.max && parseFloat(input.value) > parseInt(props.max)) {
            errorMessage = props.lengthMessage ? props.lengthMessage : state.lengthMessage + ` (max ${props.max})`;
        }

        return <span className='pui-element-input-error'>{errorMessage}</span>;
    };

    const error: JSX.IntrinsicElements['span'] = getError(props.hasError);
    let properties: IProps = { ...props };
    let cls: string = props.className ? `${props.className} pui-textarea` : 'pui-textarea';
    cls += props.disabled ? ' disabled' : '';
    cls += props.hasError ? ' error' : '';

    ['className', 'hasError', 'errorMessage', 'children', 'label'].forEach(prop => {
        delete properties[prop];
    });
    let clsLabel = ""
    if (props.required) cls += ' is-required';
    const value: TValue = typeof props.value !== 'undefined' ? props.value ?? "" : state.value ?? ""
    return (
        <div className={cls}>
            <>
                <textarea
                    ref={input}
                    {...properties}
                    name={props.name}
                    onChange={handleChange}
                    value={value}
                    placeholder={props.placeholder ?? ' '}
                />
                {props.children}
                {error}
                {props.label && <label className={clsLabel} htmlFor={props.id}>{props.label}</label>}
            </>
        </div>
    );
}
