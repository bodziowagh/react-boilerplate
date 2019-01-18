import { combineReducers, createStore } from "redux";
import { ExampleStateShape, reducer as example } from "./example/reducer";

export type StateShape = {
    example: ExampleStateShape
};

const reducers = combineReducers({
    example
});

export const store = createStore(reducers);
