/**
 * Generates the structure required to build the main menu
 *
 * The structure mus be an array of objects that can have two
 * keys: id and children if applies.
 *
 * @param {array} data
 * @returns
 */

interface IResponse {
    id: number | string;
    children?: IResponse[];
}
export const structureItems = (data: Object[]): IResponse[] => {
    const response: IResponse[] = data.map((item) => {
        if (Array.isArray(item)) {
            const [id, children] = item;
            return { id, children };
        }

        return { id: item };
    });


    return response;
};
