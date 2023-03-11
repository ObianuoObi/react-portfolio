import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';


function App() {
    const title = "Welcome to my profile";
    

    return <>

    <Header />

    <Routes>
        <Route path= "/" element = {<Home title={title}/>} />
        <Route path= "/contact" element = {<Contact/>} />
        <Route path= "/projects" element = {<Projects/>} />
    </Routes>

    </>
}

export default App;
  
  