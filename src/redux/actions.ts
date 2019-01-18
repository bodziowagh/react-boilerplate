import { ExampleActionTypes } from "./example/actions";

type ActionTypes = ExampleActionTypes;  // TODO: Combine all action types

export interface Action<T> {
    type: ActionTypes;
    payload: T;
}
