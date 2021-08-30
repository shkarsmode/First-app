import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import postReducer from "./post-reducer";
import usersReducer from './users-reducer';

let reducers = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: postReducer,
	usersPage: usersReducer
});

let store = createStore(reducers);
 
export default store;