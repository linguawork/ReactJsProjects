//для обединения нескольких watcher

import {all} from "redux-saga/effects"
import { countWatcher } from "./countSaga"
import { fetchUsersWorkerWatcher } from "./userSaga"


//this is like a global watcher, which will be passed to the run function of sagaMiddleWare
export function* rootWatcher(){

    //effect type: all unites all the watcher functions inside one array
    yield all ([countWatcher(), fetchUsersWorkerWatcher()])

}