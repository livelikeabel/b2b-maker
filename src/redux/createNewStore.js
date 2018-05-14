// 여기서 스토어를 만드는 함수를 내보낸다.
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import reducer from './reducers';
import rootSaga from './sagas';

export default function createNewStore(history) {
    const routerMw = routerMiddleware(history); //뭐하는 친구지?

    const sagaMiddleware = createSagaMiddleware(); // 사가는 나중에....
    const store = createStore(
        combineReducers({
            router: routerReducer,
            ...reducer,
        }),
        {},
        compose(
            applyMiddleware(sagaMiddleware, routerMw),
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
              ? window.__REDUX_DEVTOOLS_EXTENSION__()
              : f => f
        )
    );

    if(module.hot) {
      module.hot.accept(() => {
      /* eslint global-require: "off" */
        store.replaceReducer(require('./reducers').default);
      });
    }

    sagaMiddleware.run(rootSaga)

    return store;
}