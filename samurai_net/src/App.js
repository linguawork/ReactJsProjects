
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Footer from './components/Footer/Footer.jsx';
import Post from './components/Profile/Post/Post.jsx'


import './App.css';//import of css classes

function App() {
  return (
    <div className='app-wrapper'>  
      <Header /> 
      <Navbar/>
      <Profile/>
      <Footer/>  
      </div>
  )
}

export default App;
