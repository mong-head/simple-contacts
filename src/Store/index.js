import {createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from "./Sagas/rootSaga";

import contactReducer from './Reducers/contactReducer';
import selectedContactReducer from "./Reducers/selectedContactReducer";

const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어를 만듭니다.

const reducers = combineReducers({
    contacts : contactReducer,
    selectedContact : selectedContactReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해줍니다.
// 주의: 스토어 생성이 된 다음에 위 코드를 실행해야합니다.

export default store;