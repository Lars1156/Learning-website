import React from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Navbar } from './component/Navbar';
import {Home} from './component/Home';
import { About } from './component/About';
import { Contactus } from './component/Contactus';


function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about'element={<About/>}/>
          <Route path='/contact' element={<Contactus/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
