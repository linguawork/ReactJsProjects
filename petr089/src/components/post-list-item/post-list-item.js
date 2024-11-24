import React, {Component} from "react";
import './post-list-item.css';
import 'font-awesome/css/font-awesome.min.css';

/*
Чтобы изменять состояние  нужно создать классовый компонент.
Переделываем функцию в класс 
*/
export default class PostListItem extends Component{
    /* 
     Создаем конструктор класса чтобы создать объект состояния
    */

     //конструктор принимает пропсы (см.091)
        constructor(props){
            super(props); // SUPER просто прописываем

            //state через знак равно
            this.state = {
                important: false,
                like: false
            };

            this.importantNote = this.importantNote.bind(this);
            this.onLike = this.onLike.bind(this);

  
        }

        importantNote(){
            //принимаем переменную объекта state, SetState уже работает
            // this.setState((state)=>{
            //     state.important = !state.important
            // });

            /*лучше деструктурировать (092, 28:00)
            так как мы получаем пропс: important из state
            то ниже я должен удалить его получение из this.props
            */
            this.setState(({important})=>
            (//пишем возврат объекта, поэтому в круглых скобках
                {
                    //пишем через : так как это объект
                    important: !important
                }
            )
            );
        }
        //привязываем функцию в конструкторе через bind



        onLike(){
            
            this.setState(({like})=>
            ({//пишем возврат объекта, поэтому в круглых скобках
                like : !like
            })
            );
        }


    /*  Весь функциональный компонент скопирован в метод render
        Пропсы уже будут передаваться через this.props
     */
    render(){
        /*
            Создаем const объект c одноменными переменными
            и присваиваем значения из props, но через this
        */
       
        //по умолчанию props important=false
        const {label} = this.props;//удалили important=false из this.state

        const {important, like} = this.state;//important теперь получаем из this.state
        //false уже не пишем так как он по умолчанию стоит в state

        let classNames = "app-list-item d-flex justify-content-between ";
        //если important = true, т.е уже написано в пропсах
        if (important){
            classNames += ' important';// выделяется жёлтым 
        }

        if (like){
            classNames += ' like';// статус liked 
        }

        return (
            //li заменили на div тк уровнем выше уже обернули компонент в li
            <div className={classNames}>
                <span 
                onClick={this.onLike}
                className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    {/* добавляем onClick = function importantNote чтобы менять состояние */}
                    <button type='button'
                     className="btn-star btn-sm"
                     onClick={this.importantNote}
                     >
                        <i className="fa fa-star"></i>
                    </button>
                    <button type='button' className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}

