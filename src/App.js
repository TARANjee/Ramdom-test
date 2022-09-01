import * as React from 'react';
import './App.css';

import About from './Pages/About';
import Home from './Pages/Home';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>


  );
}
export default App;