/*
we use function generators 

*/

import { incrementCreator } from "../store/countReducer"




//function to delay
const delay =(ms) =>{ 
    
    return new Promise(resolve => setTimeout(resolve, ms))
}



//функция-генератор в роли Работника, увеличивает счетчик через диспетчер put
// но после задержки (то есть асинхронно)
function* incrementWorker(){

yield delay(1000)
//увеличение каунтера в стейте
yield put(incrementCreator())

}


function* decrementWorker(){

}



function* countWatcher(){

}