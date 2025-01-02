/*
  2. Отображение предыдущего значения хука useState:

  Хук useRef часто используется для хранения предыдущих 
  значений состояний или любых других данных, которые 
  не требуют перерендера компонента при изменении. 
  Это полезно, когда нужно отслеживать состояние между рендерами, 
  не вызывая лишней перерисовки.

  Пример: Например, если вы хотите отобразить предыдущее 
  значение состояния:


  В этом примере:

      Мы используем useRef для хранения предыдущего значения count.
      Каждый раз, когда count меняется, мы обновляем prevCountRef.current с предыдущим значением count в useEffect, который срабатывает после рендера компонента.
      useRef сохраняет значение между рендерами, но не вызывает повторный рендер компонента.
*/


import React, { useState, useEffect, useRef } from 'react';

function UseRefHookPrevValue() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    // Сохраняем предыдущее значение в ref
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="state-container">
      <p>UseRef, case with prev value :</p>
      <a href="https://www.youtube.com/watch?v=t2ypzz6gJm0" target="blank">Source video</a>
      <br/>
      <h1>Current count: {count}</h1>
      <h2>Previous count: {prevCountRef.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseRefHookPrevValue;

/*
  Резюме:

      useRef для DOM-операций: 
        Это основной способ получения ссылок на DOM элементы для 
        выполнения действий, таких как фокусировка, прокрутка, 
        или вызов других методов.
      
      useRef для хранения предыдущих значений: 
        Хук позволяет сохранять значения между рендерами, 
        что особенно полезно для отслеживания изменений состояния 
        или других данных без перерендера компонента.

  Таким образом, useRef является очень мощным инструментом в React,
  позволяя работать с DOM и хранить данные, не влияя на процесс 
  рендеринга компонента.
*/