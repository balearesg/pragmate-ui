import * as React from "react";
/***
 * Executes a useEffect hook binging the event defined in all
 * objects passed
 *
 * @param {array} objects Objects to bind
 * @param {function} onBinder function to be executed when the event is fired
 * @param {string} event the event to be listened, by default is event change
 */
 export /*bundle*/
 function useBinder(objects: any[], onBinder: () => void, event: string = 'change'): void {
    React.useEffect((): () => void => {

        objects.forEach((object: any): void => {
            if (!object) {
                throw new Error(`object is not valid in useBinder ${object}`);
            }
            object.bind(event, onBinder);
        });
        return (): void => objects.forEach((object: any) => object.unbind(event, onBinder));
    }, []);
}
