import React from "react";
import PostListItem from '../post-list-item';
import './post-list.css';

/**
 * прокидываем пропсы с верхнего компонента, там есть data (то, что пришло
    с сервера)

    props можно заменить на деструктуризацию {posts}
 
 */
const PostList = ({posts}) => {

    /**
     * создаем переменную и в нее записываем через цикл map весь массив
     * Необычно, но это JS
     * 
     */

    const arrRecord = posts.map((item)=>{
        /**делим пропсы на id и остаток
         такая запись нужна чтобы отделить один элемент props
         от остальных, так как в PostListItem нужны пропсы без id

         это практика чистого кода
         Но если id оставить внутри то проблем все равно не будет
        */
        const {id, ...itemProps} = item;//'

        return (
       //ключ прокидываем вместе с className
            <li key={item.id} className="list-group-item">
                <PostListItem 
                {...itemProps}    // spread развернул все поля в item 
                //такая запись сокращает код           
                // label={item.label} 
                // important={item.important} 
                />

            </li>
           
        );
    });


    return(
        <ul className="app-list list-group">
            {arrRecord}
        </ul>

    )
}

export default PostList;