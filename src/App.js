import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Loader from './components/Loader';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(true)
  const handleSuccess=()=>{
    setIsLogin()
  }
  return (
    <div>
      {isLogin && (
        <div >
          <BrowserRouter>
          {!isLogin && <Header/>}
          <Header/>

            <Routes>
              <Route exact path="/" element={<Login />}/>
              <Route exact path="/home" element={<Home onLogin={handleSuccess}/>} />
              <Route path="/about" element={<About />} loader={<Loader />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            {!isLogin && <Footer/>}
            <Footer/>
          </BrowserRouter>
        </div>
      )
      }

    </div >

  );
}

export default App;
