import * as React from 'react';
import './App.css';

import About from './Pages/About';
import Home from './Pages/Home';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import Test from './Components/Test';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/test" element={<Test />} />
        {/* <Route path="/user/:question" element={<Solution />} />
        <Route path="/:question" element={<Solution />} /> */}
        <Route exact element={<NotFound/>} />
      </Routes>
    </div>


  );
}
export default App;