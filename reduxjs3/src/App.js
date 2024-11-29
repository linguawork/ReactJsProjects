
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

  //added another state
  const customers = useSelector(state => state.customers.customers)
  console.log(cash)


/** не печатает prompt

Его лучше вызывать внутри функции 

а в button вызывать ссылку на функцию
  
*/





  //можем вводить то, что реально нужно
  const addCash = () =>{

    //checking the entered number, if it is real number
    const sum = Number(prompt("Enter amount to add:"))
    if (sum){
    //подаем объект action.type as type from reducer
    //payload delivers the data
    dispatch({type:"ADD_CASH", payload: sum})
    }
    else{
      alert("Invalid input")
    }

  }


  const withdrawCash =() =>{

    //checking the entered number, if it is real number
    const sum = Number(prompt("Enter amount to add:"))
    if (sum){
    //подаем объект action.type as type from reducer
    //payload delivers the data
    dispatch({type:"GET_CASH", payload: sum})
    }
    else{
      alert("Invalid input")
    }

  }



  /*
      Improved validation: The condition name && typeof name === "string" && isNaN(name.trim()) ensures that:
         name is not null or an empty string.
         name is a string.
         name doesn't represent a numeric value.
 
   Why This Works:
 
     Trim the input: By using trim(), we avoid issues where a user accidentally enters spaces or an empty string.
     Ensuring non-numeric input: isNaN() will now correctly check that the input is not a number, and you’re using trim() to ensure the check is done on the actual name without any extra spaces.
     Error handling: The alert will only trigger if the input is invalid.
   */
  
  const addCustomers =() =>{
    // the prompt function did not work if passed directly to function and there was always a window to pop u
    // so it was called within a functioin
    const name = prompt("Enter:");
    
    if (typeof name ==="string" && isNaN(name.trim())) {
      //подаем объект action.type as type from reducer
      //action.payload это как правило объект, 
      //подаем значением customer в payload
      const customer = {
        name, 
        //Date.now()Returns the number of milliseconds elapsed 
        //since midnight, January 1, 1970 Universal Coordinated 
        //Time (UTC).
        id: Date.now() 
      }

      dispatch({type:"ADD_CUSTOMER", payload: customer})
     
    } else {
      alert("Invalid input");
    }

}


const deleteCustomers =() =>{
      const name = prompt("Enter the name to delete:");
      dispatch({type:"REMOVE_CUSTOMER", payload: name })
     
}




  return (
    <div className="App">
      <div style={{fontSize: '3rem'}}>{cash}</div>
      <div style = { {display: "", position:"center"} }>

        {/* моя ошибка - не вызывать функции а вызывать ссылки на них, то есть только названия, без () */}
        {/* теперь можно вводить значения сразу из браузера через меню  
        функция prompt возвращает строку, нужно преобразовать ее в Number
        */}
        <div className='Button'>
          <button onClick={addCash}> Пополнить счет</button>
          <br/>
          <br/>

          <button onClick={withdrawCash}>Снять со счета </button>
          <br/>
          <br/>
          <a href='https://www.youtube.com/watch?v=WLeK7vIEi5I'>State with Array</a>
          <br/> 
          <button onClick={addCustomers}>Добавить клиента</button>
          <br/>
          <br/>

          <button  onClick={deleteCustomers} >Удалить клиента</button>
          <br/>
          <br/> 
          </div>    
      </div>

      
          {
            customers.length > 0 ? 
            <div>
            {/* dont forget curly brackets */}
              {customers.map(el=>
                <div   style={{fontSize: "1rem", border:"1px dotted green"}}> {el.name} </div>)
              }
            </div> 
            :
            //write without gaps: 2rem, not 2 rem
            <div style={{fontSize: "2rem", marginTop: 20}}> No clients!</div>
          }

        

    </div>
  );
}

export default App;
