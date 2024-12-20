import React, { useContext } from 'react';

/*
  Суть хука в том что можно
  передать значение аттрибута сразу в какой-либо
  вложенный компонент не передавая значение 
  атрибута через пропс во всех компонентах посредниках

  Можно использовать несколько хуков в разных компонентах

  Можно использовать один и тот же хук сразу в нескольких
  компонентах

  Также можно вложить в контекст несколько переменных
  в качестве объекта и передать через деструктуризацию
  из хука (очень удобно)

  useContext xук избавляет от постоянной передачи 
  пропсов через компоненты посредники
*/

/*
    https://www.youtube.com/watch?v=5LrDIWkK_Bc
    Learn useContext In 13 Minutes

    Need to write his interesting code

    Сравни с UseReducer

*/


// Step 1: Create a context родительский компонент, глобально
const MyContext = React.createContext();

// Step 2: Provide a value to the context
function UseContextHookSample() {
  const value = `Hello, this useContext value is
                used within a nested component !`;
  return (
    // внутри компонента возврашем .Provider как в редаксе,
    // в пропс передаем нужную переменную
    <MyContext.Provider value={value}>
          <ParentComponent />
    </MyContext.Provider>
  );
}

// Step 3: старший подкомпонент
function ParentComponent() {
    return (
      <div>
        <ChildComponent />
      </div>
    );
  }


  //младший подкомпонент
function ChildComponent() {
// Consume the context value, в подкомпонете черех хук забираем переменную из родительского провайдера
const value = useContext(MyContext);
return <div className='state-container'>{value}</div>;
}

// console.log('here')

export default UseContextHookSample;




