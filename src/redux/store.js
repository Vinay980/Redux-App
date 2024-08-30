// import legacy_createStore from redux to create a store
import { legacy_createStore,combineReducers } from "redux";

// importing all reducers
import ColorReducer from "./reducers/ColorReducer";
import CountReducer from "./reducers/CountReducer";

// Combine them using combineReducers() function
const rootReducer=combineReducers({CountReducer,ColorReducer})

// create the store variable with all reducers
const store=legacy_createStore(rootReducer)

// export the store
export default store;