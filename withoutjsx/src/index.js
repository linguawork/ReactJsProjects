
import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * (THIS IS A SAMPLE CODE OF RAW REACT CODE, NOT JSX)
 * This is JS not TS project
  React 18 version works via ReactDom.createRoot
  should be imported from react-dom/client 

  source: 
  https://medium.com/frontend-canteen/createroot-vs-reactdom-render-a-tiny-mistake-in-react18-official-documentation-d8725d8d3a4c

  for debug press F12
*/

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// //сокращение
// const e = React.createElement;


// // классовый компонент можно передавать по названию класса
// // вместо тега
// // классовый children: this.props.toWhat передаем в div, в пропсы,
// // как {toWhat: 'World} cо значением

// class Hello extends React.Component {
//   render() {
//     return e('div', null, `Press ${this.props.toWhat}`);
//   }
// }

// class ManyComponents extends React.Component {
//   render() {
//     return e('div', null, 
//     e('h1', {}, 'Lifting State Up'), 
//     e('h2', {}, 'Without JSX'),
//     e(Hello, {toWhat: 'the button'}, null),
//     e('button', {id:'id', name:"first"}, 'changeColor'),
 
//     );
//   }
// }


//   /**
//  Functional components in React without JSX:
//   https://stackblitz.com/edit/react-zwkcta?file=src%2Findex.js
//   https://stackoverflow.com/questions/68373032/how-to-write-reactjs-function-component-without-using-jsx


//   OnClick without JSX
//   https://stackoverflow.com/questions/34229825/react-onclick-without-jsx
//   https://ru.reactjs.org/docs/state-and-lifecycle.html
// */

// function App() {
//   // const [foo, setFoo] = React.useState();
//   const element = e('div', {id:'foo'}, 'testing 123');
//   return element;
// }


// /*
// Пишем классовый и функциональный компоненты с кнопками
// src: https://www.youtube.com/watch?v=dUlz4tc9LSo&t=1227s

// */
// class Switch extends React.Component{

//   constructor(){
//     super();

//     // let switcher = true;
//     this.state = {switcher: true};

    
//   }


//   changeColorHandler(){
//     this.setState((switcher)=>{
//       return !{switcher};
//     });

//   }


//     render(){
//       return e('div', null, 
//             e('button', {onClick: this.changeColorHandler.bind(this)}, 'Change color')
//             );

//   }
// }



// function appRender() {
//   // const appContainerElement = document.body;
//   const appComponent = e(App);
//   // ReactDOM.render(appComponent, appContainerElement);
//   return appComponent;
// }


// const div = e('div', {}, 

//   e(ManyComponents, {}, null),
//   e(App),
//   e(appRender),
//   e(Switch, {}, null)
// );










// // appRender();



// //в root можно передавать только один компонент
// //нельзя больше одного
// /**
//  * render(div)
//  * div-> class ManyComponents -> several components with one class
//  */









// root.render(
//   div
//   // appComponen
//   // e(Switch)
// );

// console.log(Switch.switcher);








//like_button.js
// 'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: true };
  }

 changeColorHandler(){
    this.setState((prevState)=>{
      return {prevState: !prevState.liked};
    });
    // this.setState({ liked:true ? false : true })

  }


  componentDidMount() {
    // this.timerID = setInterval(
    //   () => this.tick(),
    //   1000
    // );
  
  }

  componentWillUnmount() {
    
  }





  render() {

    // if (this.state.liked) {
    //   return 'You liked this.';

    // }

    if (!this.state.liked) {
      return 'You did not like this.';
    }




    return e(
      'button',
      { onClick: () => {this.changeColorHandler.bind(this); }},
      'Click This'
    );


  }
  
}

// console.log(LikeButton)

// const domContainer = document.getElementById('domContainer');
root.render(e(LikeButton));



