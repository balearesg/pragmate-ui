import React from 'react'
import { ISrcSet } from '../interfaces'

export function Item(props: ISrcSet) {
    if (!props.media || !props.srcSet) return null;
    return <source {...props} />
};
