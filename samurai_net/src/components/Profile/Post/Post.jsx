
import s from './Post.module.css';

/*
 * To debug just type debugger in the code before return
and in the browser press F12 
you will see a breaking point there
 * 
 * */ 

const Post = (props) => {

    // console.log(props);
    // debugger;
    return ( 
        /* className подтянется из файла App.css в папке App
        отдельный файл под стиль уже не нужен, 
        copy image address from downfalling menu*/ 
        
        <div className={s.item}>
            <img src='https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/ee5d54ff-e5b4-443d-a392-604c61c298c6/300x450'></img>
            {props.message }
            <div>
                <span> like</span>
            </div>
            
        </div>  
    )
};


export default Post