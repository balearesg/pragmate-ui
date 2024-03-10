import React from "react";
import type { IProps } from "./types";

export /* bundle */ function Dropdowm({title, icon ,children}: IProps) {

	const output = title || !icon ? title : icon ? !title || icon : title; 
    
    return (
        <section className="pui-dropdowm">
            <button className="pui-dropdowm__button">{title}</button>
            <div className="pui-dropdowm__children">
               {children}
            </div>
        </section>
    )
}