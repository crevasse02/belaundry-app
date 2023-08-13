import { combineReducers } from "redux";
import products from "./products/reducers";
import report from "./report/reducers";

const rootReducer = () => combineReducers({ products, report });

export default rootReducer;
