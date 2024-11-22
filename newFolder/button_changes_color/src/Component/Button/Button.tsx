//props: с какими параметрами работает кнопка
interface ButtonProps{
  name: string;
  press: boolean;
  changeColor:any;
  children:any;
}


export const Button = (props:ButtonProps)=>{
  
  //прокидываем параметры внутрь компонента
  const {name, press, changeColor} = props;

  /**используем параметры внутри 
  тега, глобальная функция onClick принимает функцию,
  которая прописана в родителе
  используя setColor()
  Здесь используются аноним стрелочные функции (почему?)
  */
  
  return (
    <button  onClick={()=>{changeColor(!press)}}>
      {name}
    </button>
  )

}


       