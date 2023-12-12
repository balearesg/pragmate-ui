import React from 'react'
import { UIExample } from 'pragmate-ui-docs/utils';
import { Input } from 'pragmate-ui/form';

export function Icons(): JSX.Element {
    return (
        <UIExample>
            Icon (default on the right)
            <Input label="this is a label" icon="user" />
            Icon on the left
            <Input label="this is a label" icon="user" className="left-icon" />
        </UIExample>
    )
}
