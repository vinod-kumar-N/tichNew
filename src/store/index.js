import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootReducer from '@Reducers';
import rootSaga from '@Sagas/index.js';

const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

const store = createStore(
  RootReducer,
  compose(
    applyMiddleware(...middleware),
  ),
);
sagaMiddleware.run(rootSaga);
export default store;
