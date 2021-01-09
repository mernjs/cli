import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import appReducer from 'src/reducers';

const rootReducer = combineReducers({
	form : formReducer,
	...appReducer
});

export default rootReducer;