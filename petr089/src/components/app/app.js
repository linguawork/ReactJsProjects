import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

import 'font-awesome/css/font-awesome.min.css';

const App = () =>{

    /**
     * Массив data получает данные от сервера, например, по json
     * Данные массива можно закинуть черех кастомные атрибуты компонентов,
     * которые подаются в виде пропсов
     * Пример posts={data} в компоненте PostList
     * 
     В кастомные компоненты можно передавать не только массивы (
        Петриченко 092, 9:54)
     */
    const data = [
        { label: 'going to learn React', important: true, id:'qwew'},
        { label: 'this is so good', important: false, id:'dsdfd'},
        { label: 'I need to rest', important: false, id: 'dfgdfg'}
    ];


    return (
    <div className='app'>
        <AppHeader/>
        <div className='search-panel d-flex'>
            <SearchPanel/>
            <PostStatusFilter/> 
        </div> 
        {/* кастомный атрибут: posts (хотя в списке кастомных я его не увидел)
        источник: https://medium.com/@vladimirmorulus/%D0%BA%D0%B0%D1%81%D1%82%D0%BE%D0%BC%D0%BD%D1%8B%D0%B5-%D0%B0%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D1%8B-%D0%B2-react-%D0%B8%D0%BB%D0%B8-5-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D1%8B%D1%85-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB-%D0%BA%D0%B0%D0%BA-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-%D0%B2%D0%B0%D0%BB%D0%B8%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D0%B0%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D0%B0-a22fc97be60b
        */}
        <PostList posts={data}/>
        <PostAddForm/>
         
    </div> 
   )
}

export default App;