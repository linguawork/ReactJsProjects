/**
 * https://www.w3schools.com/react/react_useref.asp
 * 3 hooks in one: useEffect, useState, useRef
 * 
 * If we tried to count how many times our application renders 
 * using the useState Hook, we would be caught in 
 * an infinite loop since this Hook itself causes a re-render.
 * To avoid this, we can use the useRef Hook.
 * 
 *  Сopy this code to src/App.tsx of template project on Desktop, 
 * to check
 * The file should have App() function
 */

 import { useState, useEffect, useRef } from "react";


 function Ref() {
   const [inputValue, setInputValue] = useState("");
   const count = useRef(0);
 
   useEffect(() => {
     count.current = count.current + 1;
   });
 
   return (
     <>
       <input
         type="text"
         value={inputValue}
         onChange={(e) => setInputValue(e.target.value)}
       />
       <h1>Render Count: {count.current}</h1>
     </>
   );
 }


/**
 * 
 * Пример с rerendering когда нет Ref
 * Здесь использовал callback of arrow empty function
 * 
 */

//  useEffect(() => {
//   //  count.current = count.current + 1;
//   setInputValue( (inputValue) => inputValue + 1);
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {inputValue}</h1>
//     </>
//   );
// }



function App() {
  return (
    <div className="App">
        <Ref></Ref>
    </div>
  );
}

export default App;
