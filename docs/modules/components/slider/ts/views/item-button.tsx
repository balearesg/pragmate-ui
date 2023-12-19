import React from 'react'
import { Button } from 'pragmate-ui/components';

export function ItemButton({ item }): JSX.Element {
    return (
        <div className='content-item content-item-button'>
            <Button variant={item.variant} label={item.label} />
        </div>
    )
}
