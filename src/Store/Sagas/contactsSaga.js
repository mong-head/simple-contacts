import {call, put, select, takeLatest, fork, takeEvery} from 'redux-saga/effects';
import { contactsType } from '../Actions/types';
import * as contactsSaga from '../Sagas/contactsSaga';
import fetchApi from './../../fetchApi';
import {symbolizeObjectId,id} from '../../symbolizeObjectId'

export function* setContacts(){
    try{
        console.log('setContacts saga 실행')
        const response = yield call(fetchApi().getAll);
        yield put({type: contactsType.CONTACTS_SET, contacts : response.map(symbolizeObjectId)});
    } catch (error) {
        yield put({type: contactsType.CONTACTS_SET, contacts : {}})
    } finally {
    }
}

export function* deleteContact(contact){
    try{
        console.log('deleteContact saga 실행')
        //const deletedContact = yield call(fetchApi().deleteContact(contact[id]));

    } catch (error) {

    } finally {

    }
}

// Action이랑 Saga 연결
const saga = [
    takeLatest(contactsType.CONTACTS_SET, contactsSaga.setContacts),
    takeLatest(contactsType.CONTACTS_DELETE, contactsSaga.deleteContact),
];
export default saga; 