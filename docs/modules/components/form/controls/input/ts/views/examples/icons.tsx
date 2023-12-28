import React from 'react'
import { UIExample } from 'pragmate-ui-docs/utils';
import { Input } from 'pragmate-ui/form';

export function Icons(): JSX.Element {
    return (
        <UIExample>
            <h5>Icon (default on the right)</h5>
            For this use the icon property with the icon name
            <Input label="this is a label" icon="user" />
            <h5>Icon on the left</h5>
            For this pass an html class left-icon.
            <Input label="this is a label" icon="user" className="left-icon" />
        </UIExample>
    )
}
