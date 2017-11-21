import { createStore, compose, applyMiddleware } from 'redux';
import createSageMiddleware from 'redux-saga';

import { rootReducer } from './reducers';

export const configureStore = () => {
  const sagaMiddleware = createSageMiddleware();

  const middlewares = [sagaMiddleware];

  const enhancers = window.devToolsExtension
    ? [window.devToolsExtension()]
    : [];

  const store = createStore(
    rootReducer,
    {}, 
    compose(
      applyMiddleware(...middlewares),
      ...enhancers,
    )
  );

  store.runSaga = sagaMiddleware.run;

  return store;
};
