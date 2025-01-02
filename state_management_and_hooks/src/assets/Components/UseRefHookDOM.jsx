/*
  хук useRef используется, 
  во-первых,  для инициации действия на выбранном элементе HTML. 
  Во-вторых, для отражения предыдущего значения хука useState.

*/


/*
  1. Инициация действия на выбранном элементе HTML:

  Один из самых распространённых случаев использования useRef — 
  это доступ к элементам DOM, например, для фокусировки на элементе,
  прокрутки, или других операций, которые требуют прямого
    взаимодействия с DOM.

  Пример: Если вам нужно программно установить фокус на input поле,
  вы можете использовать useRef для получения ссылки 
  на этот элемент.

  В этом примере useRef используется для получения ссылки 
  на input элемент, чтобы можно было вызвать метод focus 
  и установить фокус на поле при нажатии на кнопку.
*/


import React, { useRef } from 'react';

function UseRefHookDOM() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Focus the input element
  };

  return (
    <div className="state-container">
      <p>UseRef, case with DOM :</p>
      <a href="https://www.youtube.com/watch?v=t2ypzz6gJm0" target="blank">Source video</a>
      <br/>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default UseRefHookDOM;
