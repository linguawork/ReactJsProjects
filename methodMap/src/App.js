import React from "react";

/*
  Применение метод Map в JSX

  Теория:
  https://ru.reactjs.org/docs/lists-and-keys.html

  const numbers = [1, 2, 3, 4, 5];
*/

/**
 * 
  Ключи помогают React определять, 
  какие элементы были изменены,
   добавлены или удалены. 
   Их необходимо указывать, чтобы React мог 
   сопоставлять элементы массива с течением времени.

  Лучший способ выбрать ключ — это использовать строку, 
  которая будет явно отличать элемент списка от его соседей.
  Чаще всего вы будете использовать 
  ID из ваших данных как ключи:

  Когда у вас нет заданных ID для списка, 
  то в крайнем случае можно использовать 
  индекс элемента как ключ:

  Мы не рекомендуем использовать индексы как ключи, 
  если порядок элементов может поменяться. 
  Это негативно скажется на производительности и 
  может вызвать проблемы с состоянием компонента.
   Почитайте статью Робина Покорни (Robin Pokorny),
  которая объясняет, почему индексы-ключи приводят к проблемам. 
  Если вы опустите ключ для элемента в списке, 
  то React по умолчанию будет использовать индексы как ключи.

  Ключи нужно определять непосредственно внутри массивов.

  Например, если вы извлекаете компонент ListItem, 
  то нужно указывать ключ для <ListItem /> в массиве, 
  а не в элементе <li> внутри самого ListItem.

  Как правило, элементам внутри map() нужны ключи.


 */

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
      </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}




export default function App() {

//There is not typization, so we can make an array of strings or numbers

  // const numbers =[0, 1, 2, 3, 4, 5]

  const numbers =['zero', 'one', 'two', 'three', 'four',  'five']


  return (
      <NumberList numbers = {numbers}/>
  )
}

