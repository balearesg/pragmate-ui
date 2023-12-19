import React from 'react'
import { Icon } from "pragmate-ui/icons";

export function Item({ item }): JSX.Element {
    return (
        <div className='content-item'>
            <Icon icon={item.icon} />
            <span>{item.label}</span>
        </div>
    )
};
