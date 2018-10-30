import fetchNewsAPI from '../API/fetchNewsAPI';
import {put,call} from 'redux-saga/effects';

export function* fetchNewsWorker(){
    const response = yield call(fetchNewsAPI);
    yield put ({type: 'FETCH_NEWS_SUCCESS', response})
}