import React from "react";
import search from './search-panel.css';


const SearchPanel = () =>{

    //https://www.javatpoint.com/html-form-input-types (о типах инпута)
    return (

        <input className="form-control search-input"
        type='text'
        placeholder="поиск по записям"/>

    )
};

export default SearchPanel;