import {createStore, createAppropriateStore, applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './Sagas';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware)));
    
sagaMiddleware.run(rootSagas);

export default store;

