import { Action } from "../actions";
import { ExamplePayload, SET_EXAMPLE_ACTION } from "./actions";

export interface ExampleStateShape {
    exampleText: string;
}

const initialState = {
    exampleText: "Hello!"
};

export function reducer(state: ExampleStateShape = initialState, action: Action<ExamplePayload>): ExampleStateShape {
    switch (action.type) {

    case SET_EXAMPLE_ACTION:
        return {
            ...state,
            exampleText: action.payload
        }
    }

    return state;
}
