import React  from 'react';
import { useState } from 'react';
import './App.css'
import { Button } from './Component/Button/Button';



function App() {

    const [press, setColor] = useState(false);

     const buttonName = 'press to change color'

    //  console.log(press);// это для проверки вывода в браузере 

    /**
     * Button  можно прописать и одним тегом
     * Если в два тега, то в пропсах ребенка нужно прописать children
     */
    return(
        <div className={press ? 'body-color' : 'body-color2'}>
            <Button  name={buttonName} press={press} changeColor={(b:boolean)=>setColor(b)}>
               
            </Button>
        </div>

    )


}

export default App;
