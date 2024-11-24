
import s from './Navbar.module.css';


console.log(s);
const Navbar = () => {

    return ( 
        /* className подтянется из файла App.css в папке App
        отдельный файл под стиль уже не нужен
        
        <a className={`${s.item} ${s.active}`}>Messages</a>
        совмещение стилей через шаблонную строку
        37:03

        */ 
        <div className={s.navbar}>
            <a className={s.item}>Profile</a>
            <a className={`${s.item} ${s.active}`}>Messages</a>
            <a className={s.item}>News</a>
            <a className={s.item}>Music</a>
            <a className={s.item}>Settings</a>
        </div>
        
    )
};

export default Navbar