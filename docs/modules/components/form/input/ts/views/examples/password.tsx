import React from 'react'
import { UIExample } from 'pragmate-ui-docs/utils';
import { Input } from 'pragmate-ui/form';

export function Password(): JSX.Element {
    return (
        <UIExample>
            <Input label="this is a label" type="password" />
        </UIExample>
    )
}
