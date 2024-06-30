import React, { InputHTMLAttributes, ChangeEvent } from 'react';
import { IPUIProps } from 'pragmate-ui/base';

// Interface only make for extend of the properties of InputHTMLAttributes
interface IProps extends InputHTMLAttributes<HTMLInputElement> {}
type CombinedProps = IProps & IPUIProps<HTMLInputElement>;

export /* bundle */ function Switch(props: CombinedProps): JSX.Element {
    const { checked, onChange, variant = 'primary', disabled, size = 'md', className } = props;

    const [isChecked, setIsChecked] = React.useState<boolean>(!!checked);

    React.useEffect(() => {
        if (isChecked === checked) return;
        setIsChecked(!!checked);
    }, [checked]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        event.stopPropagation();
        setIsChecked(event.currentTarget.checked);
        onChange && onChange(event);
    };

    let classNameSwitch: string = `pui-element-switch ${className ? className : ''}`;
    classNameSwitch += disabled ? ' disabled' : '';

    let cls: string = isChecked ? `pui-element-switch__label active` : 'pui-element-switch__label';
    cls += variant ? ` ${variant}` : '';
    cls += size ? ` ${size}` : '';

    const properties: CombinedProps = { ...props };

    ['className', 'checked', 'onChange', 'variant', 'size', "id"].forEach(prop => {
        delete properties[prop];
    });

    const id = props.id ?? props.name ?? "pui-element-switch";

    return (
        <div className={classNameSwitch}>
            <input
                className='pui-element-switch__checkbox'
                id={id}
                type='checkbox'
                checked={isChecked}
                onChange={handleChange}
                {...properties}
            />
            <label className={cls} htmlFor={id}>
                <span className={`label__btn--slider`} />
            </label>
        </div>
    );
}
