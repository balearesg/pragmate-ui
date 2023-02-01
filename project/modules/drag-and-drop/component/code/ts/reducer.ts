import { InitialState, Payload } from "./types";

export const reducer = (state: InitialState, payload: Payload): InitialState => {
    switch (payload.case) {
        case "dragging": {
            return {
                ...state,
                dragging: payload.dragging
            };
        };
        case "files": {
            return {
                ...state,
                files: payload.files
            };
        };
        case "message": {
            return {
                ...state,
                message: {
                    show: payload.show,
                    text: payload.text,
                    type: payload.type,
                }
            }
        };
        case "hideMessage": {
            return {
                ...state,
                message: {
                    show: false,
                    text: null,
                    type: null,
                }
            }
        };
        case "img": {
            return {
                ...state,
                img: payload.img
            }
        };
        default:
            return;
    };
};

export const initialState: InitialState = {
    dragging: false,
    files: [],
    message: {
        show: false,
        text: null,
        type: null,
    },
    img: "",
};