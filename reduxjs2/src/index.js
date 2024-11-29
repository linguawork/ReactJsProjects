// this is part 2
//https://www.youtube.com/watch?v=ldgnmiPIftw
// to watch: https://www.youtube.com/watch?v=ax1verdkVPo
//part3: https://www.youtube.com/watch?v=WLeK7vIEi5I
// This is with TS https://www.youtube.com/watch?v=ETWABFYv0GM


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//what is imported from redux
import { store } from './store/index';
import { Provider } from 'react-redux';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//компонент провайдер из react-redux
//параметром он принимает store
<Provider store={store}> 
    <App />
</Provider>

);

