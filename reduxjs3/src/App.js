
import './App.css';
import {useDispatch, useSelector} from 'react-redux'


//3 метода для работы с состоянием
//methods to get state
//to change state with the help of dispatch
//подписаться на изменение состояния


function App() {
  
  //4:47
  //чтобы ИЗМЕНИТЬ состояние нужно использовать хук dispatch
  //он принимает action
  const dispatch = useDispatch()
  
  //чтобы ПОЛУЧИТЬ состояние нужно использовть хук useSelector
  //он принимает функцию параметром
  // a функция принимает состояние

  //так как редюсер имеет ключ в rootReducer
  //обращаемся к нему по ключу
  // если нет ключа, то обращаемся без ключа
  const cash = useSelector(state => state.cash.cash)
  console.log(cash)


/** не печатает prompt*/

//   //можем вводить то, что реально нужно
//   const addCash = (cash) =>{
//     //подаем объект action.type as type from reducer
//     dispatch({type:"ADD_CASH", payload: {cash}})
//   }


//   const withdrawCash =(cash) =>{
//        //подаем объект action.type as type from reducer
//        dispatch({type:"GET_CASH", payload: cash})
//   }



//   return (
//     <div className="App">
//       <div style={{fontSize: '3rem'}}>{cash}</div>
//       <div style = { {display: "flex"} }>

//         {/* моя ошибка - не вызывать функции а вызывать ссылки на них, то есть только названия, без () */}
//         {/* теперь можно вводить значения сразу из браузера через меню  
//         функция prompt возвращает строку, нужно преобразовать ее в Number
//         */}
//           <button onClick={addCash(Number(prompt()))}> Пополнить счет</button>
//           <button onClick={withdrawCash(Number(prompt()))}>Снять со счета </button>
//           <a href='https://www.youtube.com/watch?v=Dzzeir85i3c&list=PLYlfM6qKBI5jC49wKnTGtpa4neWiWj72Y&index=2'>video</a>

//       </div>
//     </div>
//   );
// }



  //можем вводить то, что реально нужно
  const addCash = () =>{
    //подаем объект action.type as type from reducer
    dispatch({type:"ADD_CASH", payload: 5})
  }


  const withdrawCash =() =>{
       //подаем объект action.type as type from reducer
       dispatch({type:"GET_CASH", payload: 4})
  }



  return (
    <div className="App">
      <div style={{fontSize: '3rem'}}>{cash}</div>
      <div style = { {display: ""} }>

        {/* моя ошибка - не вызывать функции а вызывать ссылки на них, то есть только названия, без () */}
        {/* теперь можно вводить значения сразу из браузера через меню  
        функция prompt возвращает строку, нужно преобразовать ее в Number
        */}
          <button onClick={addCash}> Пополнить счет</button>
          <br/>
          <br/>

          <button onClick={withdrawCash}>Снять со счета </button>
          <br/>
          <br/>
          <a href='https://www.youtube.com/watch?v=WLeK7vIEi5I'>State with Array</a>
          <br/>        
      </div>
    </div>
  );
}

export default App;
