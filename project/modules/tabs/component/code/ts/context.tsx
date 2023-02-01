import * as React from 'react';
import { createContext, Context, useState, useEffect, useContext, PropsWithChildren } from 'react';
interface props {
    orientation?: string
    selected?: string
    className?: string
}

const TabsContext: Context<any> = createContext({});

export /*bundle*/ function TabsContextProvider(props: PropsWithChildren<props>): JSX.Element {
    const { children, orientation, className, selected } = props;
    const [active, setSelected] = useState<string>(selected);

    useEffect((): void => {
        setSelected(selected);
    }, [selected]);

    const tabNavigate = (index: string) => setSelected(index);

    const data = {
        'children': children,
        'orientation': orientation,
        'tabNavigate': tabNavigate,
        'selected': active,
        'index': selected !== active ? selected : active
    };

    const orientationTab = orientation ? orientation : 'horizontal';
    let cls = 'beyond-tabs beyond-tabs-container ';
    cls += `${orientationTab === 'horizontal' ? 'beyond-tabs-horizontal' : 'beyond-tabs-vertical'}`;

    if (className) cls += ` ${className}`;

    return (
        <TabsContext.Provider value={data}>
            <div className={cls}>
                {children}
            </div>
        </TabsContext.Provider>
    );
}

export /*bundle*/ const useTabsContext = () => useContext(TabsContext);