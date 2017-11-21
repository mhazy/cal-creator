import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
  
import './index.css';

import { configureStore } from './store/configure';
import { AppContainerComponent } from './app';

import { rootSaga } from './store/sagas';

const store = configureStore();

store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={ store }>
    <AppContainerComponent />
  </Provider>,
  document.getElementById('root')
);
