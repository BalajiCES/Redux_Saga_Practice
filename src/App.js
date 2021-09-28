import React from "react";
import Weather from "./weather-component/weather";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/root-reducer";
import rootSaga from "./saga/root-saga";

// create a saga middleware
const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

// Then run the saga
sagaMiddleWare.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}

export default App;
