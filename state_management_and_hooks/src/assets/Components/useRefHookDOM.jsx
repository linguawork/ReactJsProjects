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
