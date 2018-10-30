import {takeLatest} from 'redux-saga/effects';
import {fetchNewsWorker} from './fetchNewsWorker';

export default function* rootSagas(){
    yield takeLatest('FETCH_NEWS', fetchNewsWorker);
}