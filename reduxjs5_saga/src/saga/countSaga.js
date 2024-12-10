/*
we use function generators 

*/

import { ASYNC_INCREMENT, incrementCreator } from "../store/countReducer"

import { put, takeEvery } from 'redux-saga/effects'


/*function to delay
 my mistake: should return when used in curly braces.
    const delay =(ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
*/

//If not in curly braces:
const delay =(ms) =>  new Promise(resolve => setTimeout(resolve, ms))




//1
//функция-генератор в роли Работника, увеличивает счетчик через диспетчер put
// но после задержки (то есть асинхронно)
function* incrementWorker(){

yield delay(1000)
//увеличение каунтера в стейте
yield put(incrementCreator())

}


//2
// эта функция WATCHER следит за тем, чтобы асинхронный код в функции Worker был выполнен
// использует эффект из саги takeEvery, который принимает action
export function* countWatcher(){

    //первым параметром тип экшна а вторым функцию Работника
    yield takeEvery(ASYNC_INCREMENT, incrementWorker)
}

function* decrementWorker(){

}

