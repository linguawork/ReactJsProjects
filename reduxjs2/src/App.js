
import './App.css';
import {useDispatch, useSelector} from 'react-redux'


function App() {
  
  //4:47
  //чтобы ИЗМЕНИТЬ состояние нужно использовать хук dispatch
  //он принимает action
  const dispatch = useDispatch()
  
  //чтобы ПОЛУЧИТЬ состояние нужно использовть хук useSelector
  //он принимает функцию параметром
  // a функция принимает состояние
  const cash = useSelector(state => state.cash)
  console.log(cash)

  const addCash = () =>{

    //подаем объект action.type as type from reducer
    dispatch({type:"ADD_CASH", payload: 5})


  }


  const withdrawCash =() =>{
       //подаем объект action.type as type from reducer
       dispatch({type:"GET_CASH", payload: 5})

  }



  return (
    <div className="App">
      <div style={{fontSize: '3rem'}}>{cash}</div>
      <div style = { {display: "flex"} }>

        {/* моя ошибка - не вызывать функции а вызывать ссылки на них, то есть только названия, без () */}
          <button onClick={addCash}> Пополнить счет</button>
          <button onClick={withdrawCash}>Снять со счета </button>
          <a href='https://www.youtube.com/watch?v=Dzzeir85i3c&list=PLYlfM6qKBI5jC49wKnTGtpa4neWiWj72Y&index=2'>video</a>

      </div>
    </div>
  );
}

export default App;
