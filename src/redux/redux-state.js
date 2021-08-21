import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import postReducer from "./post-reducer";

let reducers = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: postReducer
});

let store = createStore(reducers);
 
export default store;