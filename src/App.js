import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';



function App() {
    

    return <>

    <Header />

    <Routes>
        <Route path= "/" element = {<Home/>} />
        <Route path= "/contact" element = {<Contact/>} />
        <Route path= "/projects" element = {<Projects/>} />
    </Routes>

    </>
}

export default App;
  
  