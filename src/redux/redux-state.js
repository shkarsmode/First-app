import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import postReducer from "./post-reducer";
import usersReducer from './users-reducer';

let reducers = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: postReducer,
	usersPage: usersReducer,
	auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;