import React from "react";
import { Dropdowm } from "pragmate-ui/dropdowm";
import { Icon } from 'pragmate-ui/icons';

export function Result() {

    const icons = ['add', 'folder', 'house', 'user', 'upload', 'activeSurvey'];

    const output = icons.map((icon: string) => (
        <label key={icon} className="content-icons">
            <Icon icon={icon} />
            <strong>
                {icon}
            </strong>
        </label>
    ))
    return (
        <section className="container-result">
            <Dropdowm title='Apps'>
               {output}
            </Dropdowm>
        </section>
    )
}