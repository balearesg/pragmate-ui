import * as React from 'react';
import { ReactNode } from 'react';
import { useTabsContext } from './context';

export /*bundle*/ function TabsContent(props: { children: ReactNode[] }): JSX.Element {

    const context = useTabsContext()
    const { children } = props;
    const content = children.find((content, index) => index === context.index);
    return (<div className="beyond-tabs-content">{content}</div>);
};
