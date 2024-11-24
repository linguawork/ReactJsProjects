import React, { Component } from "react";



class WhoAmI extends Component {
  //динамически пропсы не поменять, они только для чтения
  //чтобы менять динамически нужен объект state
  constructor(props){
    //через super вызывает родителя
    super(props);
    //так можно хранить состояние для каждого человека
    this.state ={
      years: 26
    };
    /** это первый способ привязки метода к классу прямо в конструкторе */
    // this.nextYear = this.nextYear.bind(this); // это жесткая привязка

    /** это второй способ: прописываем метод в конструкторе,
     в стрелочную функцию подаем функцию setState в которую подаем еще одну стрелочную
    */
    // this.nextYear= () => {
      
    //   this.setState(state => (
    //     { 
    //   years: ++state.years
    // }
    // )
    // )

    // }
  }


/* Третий метод

 * ES9 экспериментальный метод: class fields
 * Пишем стрелочную функцию отдельно
 
*/

  nextYear= () => {
      
    this.setState(state => (
      {  years: ++state.years }
    ))

  }

  // nextYear(){
  //   console.log(1);
  //   // this.state.years = this.setState
  //   // this.state.years++, Linter: нельзя так мутировать состояние
  //   // правильно изменять через setState(). В метод можно передать объект
  //   // this.setState({
  //   //   years: 27
  //   // })
  //   //
  //   // правильное написание: внутрь функции подали стрелочную функцию
  //   this.setState( prevState => ({ 
  //     years: ++prevState.years
  //     // после этого функцию нужно будет привязать в конструкторе через bind()
  //     //таким образом будет независимый экземпляр
  //   }))
  // }

  /** этот метод отрисовывает на странице */
  render() {
    // деструктуризация (this необходимо
    // для пришивки к классу), это объект вызова
    const {name, surname, link} = this.props;
    const {years} = this.state;
    // сюда можно скопировать return из функ. компонент
     return (
      <React.Fragment>
       <h1>First name is {name}, surname is {surname}, age is {years}</h1> 
        {/* добавление события через функцию*/}
       <button onClick={this.nextYear}>++</button>
       <a href={link}>The link to site </a>
      </React.Fragment>
      )
  }
}

// props идут только на чтение
// const WhoAmI =(props) =>{

//   return (
//   <React.Fragment>
//    <h1>First name is {props.name}, surname is {props.surname}</h1>
//    <a href={props.link}>The link to site </a>
//   </React.Fragment>
//   )
// }

//деструктуризация вместо пропс.something
// const WhoAmI =({name, surname, link}) =>{

//   return (
//   <React.Fragment>
//    <h1>First name is {name}, surname is {surname}</h1>
//    <a href={link}>The link to site </a>
//   </React.Fragment>
//   )
// }

const All = () =>{

  return (
    <React.Fragment>
      <WhoAmI name="John" surname="Johnson" link="facebook.com/2"/>
      <WhoAmI name="Jack" surname="London" link="facebook.com/1"/>
      <WhoAmI name="Jeremy" surname="Smith" link="facebook.com/3"/>
    </React.Fragment>
    
  )

}


function App() {
  return (
    <div className="App">
        <All/>
    </div>
  );
}

export default App;
