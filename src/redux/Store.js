import { createStore } from "redux";
import { FollowerReducer } from "./reducers/FollowerReducer";

const appStore = createStore(FollowerReducer);
export default appStore;