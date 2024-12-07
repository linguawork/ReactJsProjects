
import './App.css';
import {useDispatch, useSelector} from 'react-redux'


/* 
  3 понятия для работы с Redux saga:

  Workers

  Watchers

  Effects

*/


function App() {
  
  /*
    чтобы ПОЛУЧИТЬ состояние нужно использовть хук useSelector
    он принимает функцию параметром,
    a функция принимает состояние

    так как редюсер имеет ключ в rootReducer
    обращаемся к нему по ключу
    если нет ключа, то обращаемся без ключа 
  */
  const counter = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.users)
  // console.log(cash)
  /*
    чтобы ИЗМЕНИТЬ состояние нужно использовать хук dispatch
    он принимает action
  */
  const dispatch = useDispatch()
  

  return (
    <div className="App">
      <div className='count'>{count}</div>
      <div className='btns'>
        <button className='btn' onClick={ ()=>dispatch(incrementCreator()) }> INCREMENT </button>
        <button className='btn' onClick={ ()=>dispatch(decrementCreator()) }> DECREMENT </button>
        <button className='btn' > GET USERS </button>
      </div>

      <div className='users' >
        {/* dont forget curly brackets */}
          {
            users.map( el =>
              <div className='user'>
                {el.name} 
              </div>)
          }
      </div>            
    </div>
  );
}

export default App;




