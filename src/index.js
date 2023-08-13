import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./redux/reducers";
import rootSaga from "./redux/sagas";
import { routerMiddleware } from "connected-react-router";
import { createHashHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";

const history = createHashHistory();

const sagaMiddleWare = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleWare, routeMiddleware];

const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleWare.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
