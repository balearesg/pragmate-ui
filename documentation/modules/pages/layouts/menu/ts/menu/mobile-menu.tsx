import * as React from 'react';
import {useMenuContext} from "./context";

export function MobileMenu() {
    const {texts} = useMenuContext();
    return (
        <>
            <ul className="docs__menu__list mobile__menu">
                <li><a href="/docs/tutorial/start">{texts.tutorial}</a></li>
                <li><a href="/docs/intro">{texts.documentation}</a></li>
                <li><a href="/examples">{texts.examples}</a></li>
            </ul>
        </>
    )
}
