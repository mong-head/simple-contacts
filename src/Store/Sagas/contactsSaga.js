import {call, put, takeLatest} from 'redux-saga/effects';
import { contactsType } from '../Actions/types';
import * as contactsSaga from '../Sagas/contactsSaga';
import fetchApi from './../../fetchApi';
import {symbolizeObjectId,id} from '../../symbolizeObjectId'

export function* setContacts(){
    try{
        const response = yield call(fetchApi().getAll);
        yield put({type: contactsType.CONTACTS_SET_RESULT, contacts : response.map(symbolizeObjectId)});
    } catch (error) {
        yield put({type: contactsType.CONTACTS_SET_RESULT, contacts : {}})
    } finally {
    }
}

export function* deleteContact({contact}){
    try{
        const deletedContact = yield call(fetchApi().deleteContact,contact[id]);
        yield put({type: contactsType.CONTACTS_DELETE_RESULT, contact : symbolizeObjectId(deletedContact)})
    } catch (error) {
        yield put({type: contactsType.CONTACTS_DELETE_RESULT})
    } finally {

    }
}

export function* addContact({contact}){
    try{
        const addedContact = yield call(fetchApi().addContact,contact);
        yield put({type: contactsType.CONTACTS_ADD_RESULT, contact : symbolizeObjectId(addedContact)})
    } catch(error){
        yield put({type: contactsType.CONTACTS_ADD_RESULT})
    } finally {

    }
}

// Action이랑 Saga 연결
const saga = [
    takeLatest(contactsType.CONTACTS_SET, contactsSaga.setContacts),
    takeLatest(contactsType.CONTACTS_DELETE, contactsSaga.deleteContact),
    takeLatest(contactsType.CONTACTS_ADD, contactsSaga.addContact),
];
export default saga; 