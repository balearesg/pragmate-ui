import React from 'react';
import { useDragAndDropContext } from './context';

export function Message(): JSX.Element {
    const { message } = useDragAndDropContext();
    return (
        <>  {message.show && (
            <div
                className={`FilesDragAndDrop__placeholder FilesDragAndDrop__placeholder--${message.type}`}
            >
                {message.text}
                <span
                    role='img'
                    aria-label='emoji'
                    className='area__icon'
                >
                    {message.type === 'error' ? <></> : <>&#128079;</>}
                </span>
            </div>
        )}</>
    )
}
