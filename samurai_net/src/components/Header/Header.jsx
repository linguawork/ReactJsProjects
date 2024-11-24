// import logo from './lotus.jpg'
import logo from './L2.jpg'

import classes from './Header.module.css'

const Header = () => {

    return ( 
        /* className подтянется из файла App.css в папке App
        отдельный файл под стиль уже не нужен*/ 
        <div className={classes.header}>
            {/* <img src = 'https://i.pinimg.com/564x/37/5b/1e/375b1e203711866e444972929f8c1940.jpg' alt="" ></img> */}
            <img src = {logo} alt="" ></img>
            
            Header
        </div>
        
    )
};

export default Header