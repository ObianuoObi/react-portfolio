import Header from './components/Header';
import Home from './components/Home';

function App() {
  const title = "Welcome to my profile";
  return (

    <>

      <Header />
      <Home title={title}/>

    </>

  )
}

export default App;
