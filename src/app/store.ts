import {combineReducers, legacy_createStore, Store, UnknownAction} from "redux";
import {appReducer} from "./app-reducer";

const rootReducer = combineReducers({
    app: appReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)

// @ts-ignore
window.store = store