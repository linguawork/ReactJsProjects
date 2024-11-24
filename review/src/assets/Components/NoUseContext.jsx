import React  from 'react';

/*
 Это пример для сравнения с useContext hook
 
 Здесь передаются пропсы через все компоненты 
 в нужный вложенный компонент
 


*/



// Step 2: Provide a value to the context
function NoUseContextHookSample() {
  const contextValue = 'Hello, useContext!';
  return (

      <ParentComponent contextValue={contextValue} />

  );
}

// Step 3: Pass props down through intermediate components
function ParentComponent({ contextValue }) {
  return (
    <div>
      <ChildComponent contextValue={contextValue} />
    </div>
  );
}

function ChildComponent({ contextValue }) {
  return <div className='state-container'>{contextValue}</div>;
}

export default NoUseContextHookSample;
