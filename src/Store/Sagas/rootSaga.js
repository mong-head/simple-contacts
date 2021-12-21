import { all } from 'redux-saga/effects';
import contactsSaga from '../Sagas/contactsSaga';

export default function* rootSaga() {
    yield all([
        ...contactsSaga
    ]);
}