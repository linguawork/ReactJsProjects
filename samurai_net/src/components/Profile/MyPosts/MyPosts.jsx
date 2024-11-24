
import classes from './MyPosts.module.css';
import Post from '../Post/Post';


const MyPosts = () => {

    return ( 
        /* className подтянется из файла App.css в папке App
        отдельный файл под стиль уже не нужен, 
        copy image address from downfalling menu */ 

            <div>
                My Posts
                <div>
                    {/* добавили поле для текста с кнопкой */}
                    <textarea></textarea>
                    <button>Add text</button>
                </div>
                <Post message = 'Hello, friends!'/>
                <Post message = 'How are you?'/> 
            </div>
    )
};


export default MyPosts