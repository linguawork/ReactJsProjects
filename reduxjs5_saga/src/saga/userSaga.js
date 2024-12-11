
// a new effect is imported: call
// it returns data inside the Promise

import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_USERS, setUsers } from '../store/userReducer'



//fetch returns Promise
const fetchUserFromRestApi = () => fetch('https://jsonplaceholder.typicode.com/users')
// console.log(fetchUserFromRestApi())


function* fetchUsersWorker(){

    //the effect which is called CALL, returns data which comes inside Promise
    //works just like async await function
    const promisedData = yield call(fetchUserFromRestApi)
    console.log(promisedData)

    const promisedJson = yield call(()=> new Promise(resolve =>resolve(promisedData.json())))

    //the effect:put works like dispatch and accepts action object 
    yield put(setUsers(promisedJson))

}


export function* fetchUsersWorkerWatcher(){
    //this effect takes action type and worker function

    //can an action type be as a different name (I can write anything)?
   yield takeEvery(FETCH_USERS, fetchUsersWorker)

}