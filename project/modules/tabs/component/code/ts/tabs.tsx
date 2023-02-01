import * as React from 'react';
import { useState, PropsWithChildren } from "react";
import { useTabsContext } from './context';
import { BeyondTab } from './tab';

type props = {
    onClick?: any;
    children?: any;
    nolink?: any,
    selected?: any
};

type properties = {
    key?: number,
    selected?: string,
    isActive?: boolean,
    index?: string,
    "data-index"?: number,
    onClick?: any,
    nolink?: any,
    className?: string
}

export /*bundle*/ function Tabs(props: PropsWithChildren<props>): JSX.Element {

    const [state, setState] = useState({
        active: true,
        valueSelected: 0
    });

    const { tabNavigate: tabNavigateGo, selected } = useTabsContext()

    const tabNavigate = (event, callback) => {

        const target = event.currentTarget;
        const index = target.dataset.index;

        setState({
            'valueSelected': index,
            'active': (index !== state.valueSelected) ? true : !state.active
        });

        if (callback) callback(event);

        tabNavigateGo(parseInt(index));

    }


    const { children, nolink, } = props;
    const { active, valueSelected } = state;

    const output = children.map((tab, index) => {

        const properties: properties = {
            'key': index,
            'selected': selected,
            'isActive': active,
            'index': index,
            'data-index': index
        };

        if (!nolink) properties.onClick = tabNavigate;
        else properties.nolink = true;

        if (tab.props.onClick) properties.onClick = event => tabNavigate(event, tab.props.onClick);

        if (tab.type === BeyondTab) return React.cloneElement(tab, properties);

        return (
            <BeyondTab {...properties} key={index}>
                {tab}
            </BeyondTab>
        );
    });

    return (
        <div className='beyond-tabs-items'>
            <div className="tabs-container">
                {output}
            </div>

        </div>
    );
}
