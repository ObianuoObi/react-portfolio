import Header from './components/Header';
import Main from './components/Main';
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {
    const title = "Welcome to my profile";

    return <>
    <Header />
   
    <Home  title={title}/>
    <Contact />

    </>
}

export default App;
  
  