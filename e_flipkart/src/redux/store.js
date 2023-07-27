import {  applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getProductDetailsreducer, getProductsReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/CartReducer";

const reducer= combineReducers({
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsreducer,
    Cart:cartReducer
})

const middlewere= [thunk];

const store = createStore(
        reducer,
        composeWithDevTools(applyMiddleware(...middlewere))
)

export default store;