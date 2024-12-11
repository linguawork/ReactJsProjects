
import './App.css'
import SetState1 from './assets/Components/ClassSetState1'
import SetState2 from './assets/Components/ClassSetState2'
import SetState3 from './assets/Components/ClassSetState3';
import SetState4 from './assets/Components/ClassSetState4';
import Clock from  './assets/Components/LifeCycleClock';
import UseStateHook from  './assets/Components/UseStateHook';
import UseStateHookArrow from './assets/Components/UseStateHookArrow';
import UseStateHookObject from './assets/Components/UseStateHookObject';
import UseStateHookMulti from './assets/Components/UseStateHookMulti';
import UseEffectHookSideEffect from './assets/Components/UseEffectHook';
import UseContextHookSample from './assets/Components/UseContext';
import NoUseContextHookSample from './assets/Components/NoUseContext';



// need the useContext hook


function App() {

  return (
    //this is fragment and it should be in round brackets
    <>

      <Clock/>

      {/*компонент to learn the state management in class component */}
      <SetState1/> 
      <SetState2/>
      <SetState3/>
      <SetState4/>
    
      <UseStateHook/>  
      <UseStateHookArrow/>   
      <UseStateHookObject/>
      <UseStateHookMulti/>

      <UseEffectHookSideEffect/>

      <UseContextHookSample/>
      <NoUseContextHookSample/>

      
    </>
  )
}

export default App
