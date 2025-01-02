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

