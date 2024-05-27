import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Contact from './components/Contact';



function App() {
  return (
    <div>
      <BrowserRouter> <Header />


        <Routes> 
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>

  );
}

export default App;
